const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    const usersData = [
        {
            email: 'alice@example.com',
            name: 'Alice',
            password: 'password123',
            posts: [
                {
                    title: 'Hello World',
                    content: 'This is my first post',
                },
            ],
        },
        {
            email: 'bob@example.com',
            name: 'Bob',
            password: 'password456',
            posts: [
                {
                    title: 'Hello Prisma',
                    content: 'This is my first post with Prisma',
                },
            ],
        },
        // Add more users here...
    ]

    const userPromises = usersData.map(user => 
        prisma.user.create({
            data: {
                ...user,
                posts: {
                    create: user.posts,
                },
            },
            include: {
                posts: true,
            },
        })
    )

    const newUsers = await Promise.all(userPromises)

    console.log(newUsers)
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })