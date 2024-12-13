import { prisma } from "./prisma-client"

(async() => {
  await populateCourseCategory();
})()

async function populateCourseCategory() {
  const courseCategories = ['Ciencia', 'Matemáticas', 'Ingeniería', 'Idiomas', 'Humanidades', 'Programación', 'Arte', 'Deporte', 'Economía', 'Otro']

  for (const category of courseCategories ) {
    await prisma.courseCategory.create({ data: {
      name: category
    }})
  }

  console.log('Category Subject created in Database')
} 