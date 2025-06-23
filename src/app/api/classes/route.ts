import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CLASSES_DIR = path.join(process.cwd(), "content", "classes");

// GET - получить всех тренеров
export async function GET() {
  try {
    if (!fs.existsSync(CLASSES_DIR)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(CLASSES_DIR);
    const classes = files
      .filter((file) => file.endsWith(".yml"))
      .map((file) => {
        const filePath = path.join(CLASSES_DIR, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return {
          title: data.title || "",
          imageSrc: data.imageSrc || "",
          type: data.type || "",
          cost: data.cost || "",
          duration: data.duration || "",
          order: data.order || 1,
          className: data.className || "",
          description: data.description || "",
        };
      })
      .sort((a, b) => a.order - b.order);

    return NextResponse.json(classes);
  } catch (error) {
    console.error("Error reading classes:", error);
    return NextResponse.json(
      { error: "Failed to read classes" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const {
      title,
      imageSrc,
      type,
      cost,
      duration,
      order,
      className,
      description,
    } = await request.json();

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    // Создаем директорию если её нет
    if (!fs.existsSync(CLASSES_DIR)) {
      fs.mkdirSync(CLASSES_DIR, { recursive: true });
    }

    // Создаем slug из имени
    const slug = title
      .toLowerCase()
      .replace(/[^a-zа-я0-9\s]/gi, "")
      .replace(/\s+/g, "-")
      .replace(/[а-я]/g, (match: string) => {
        const cyrillicToLatin: { [key: string]: string } = {
          а: "a",
          б: "b",
          в: "v",
          г: "g",
          д: "d",
          е: "e",
          ё: "yo",
          ж: "zh",
          з: "z",
          и: "i",
          й: "y",
          к: "k",
          л: "l",
          м: "m",
          н: "n",
          о: "o",
          п: "p",
          р: "r",
          с: "s",
          т: "t",
          у: "u",
          ф: "f",
          х: "h",
          ц: "ts",
          ч: "ch",
          ш: "sh",
          щ: "sch",
          ъ: "",
          ы: "y",
          ь: "",
          э: "e",
          ю: "yu",
          я: "ya",
        };
        return cyrillicToLatin[match] || match;
      });

    const fileName = `${slug}.md`;
    const filePath = path.join(CLASSES_DIR, fileName);

    // Создаем содержимое файла
    const frontMatter = {
      title,
      imageSrc: imageSrc || "",
      order: order || 1,
      type: type || "",
      cost: cost || "",
      duration: duration || "",
      className: className || "",
    };

    const fileContent = matter.stringify(description || "", frontMatter);

    // Записываем файл
    fs.writeFileSync(filePath, fileContent, "utf8");

    return NextResponse.json({
      success: true,
      message: "Class created successfully",
      fileName,
    });
  } catch (error) {
    console.error("Error creating class:", error);
    return NextResponse.json(
      { error: "Failed to create class" },
      { status: 500 }
    );
  }
}
