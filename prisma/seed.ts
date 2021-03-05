import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs"
import faker from 'faker';
const prisma = new PrismaClient()


async function main() {

  const hashedPassword = await bcrypt.hash('password', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'pottyladies@gmail.com' },
    update: {},
    create: {
      email: `pottyladies@gmail.com`,
      firstName: "Amy",
      lastName: 'Wallis',
      phone: 223079586,
      hashedPassword,
      addressStreet1: faker.address.streetAddress(),
      addressStreet2: '1a1a',
      addressCity: faker.address.city(),
      addressRegion: faker.address.county(),
      addressZip: 121212,
    },
  })

  const client1 = await prisma.user.upsert({
    where: { email: 'client1@gmail.com' },
    update: {},
    create: {
      email: `client1@gmail.com`,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: 223079586,
      hashedPassword,
      addressStreet1: faker.address.streetAddress(),
      addressStreet2: '1a',
      addressCity: faker.address.city(),
      addressRegion: faker.address.county(),
      addressZip: 121212,
    },
  })

  const client2 = await prisma.user.upsert({
    where: { email: 'client2@gmail.com' },
    update: {},
    create: {
      email: `client2@gmail.com`,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: 223079586,
      hashedPassword,
      addressStreet1: faker.address.streetAddress(),
      addressStreet2: '1a',
      addressCity: faker.address.city(),
      addressRegion: faker.address.county(),
      addressZip: 121212,
    },
  })
  const client3 = await prisma.user.upsert({
    where: { email: 'client3@gmail.com' },
    update: {},
    create: {
      email: `client3@gmail.com`,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: 223079586,
      hashedPassword,
      addressStreet1: faker.address.streetAddress(),
      addressStreet2: '1a',
      addressCity: faker.address.city(),
      addressRegion: faker.address.county(),
      addressZip: 121212,
    },
  })

  const plantType1 = await prisma.plantType.upsert({
    where: { name: 'flower' },
    update: {},
    create: {
      name: 'flower'
    },

  })
  const plantType2 = await prisma.plantType.upsert({
    where: { name: 'tree' },
    update: {},
    create: {
      name: 'tree'
    },

  })
  const plantType3 = await prisma.plantType.upsert({
    where: { name: 'shrub' },
    update: {},
    create: {
      name: 'shrub'
    },
  })

  const flower1 = await prisma.plant.upsert({
    where: { name: 'Achillea filipendulina "Goldplate"' },
    update: {},
    create: {
      name: 'Achillea filipendulina "Goldplate"',
      typeId: 1,
      description: 'Achillea filipendulina "Goldplate" is one of the tallest growing Achilleas that will reward you with impressive wide golden flowers that rise above its lovely divided green foliage. It is a mild-mannered Achillea so is easy to manage in the garden.  Its flowers make a wonderful cut flower and they also dry particularly well.  It is very floriferous and flowers from late spring through to late summer and often beyond. Goldplate is easy care and particularly drought tolerant once established and its beautiful golden flowers look simply stunning with anything blue, so be sure to take a look at our lovely blue Asters.  The Royal Horticultural Society (RHS) awarded this standout plant with the prestigious Award of Garden Merit.  Achilleas love sun and soil that is not too rich so your average garden soil is just to its liking, all it really wants is some good drainage',
      dimensions: 'Height with flowers to 60cm x spread of 90cm',
      price: 12.00,
      stock: 10,
      potSize: '1.2 litres',
    },
  })

  const flower2 = await prisma.plant.upsert({
    where: { name: 'Achillea millefolium "Terracotta' },
    update: {},
    create: {
      name: 'Achillea millefolium "Terracotta',
      typeId: 1,
      description: 'Achillea millefolium "Terracotta" has a  mosaic of warm bricky orange coloured flowers and is a perfect choice for naturalistic and wildflower gardens as well as being a perfect addition to the cottage garden and your perennial border.  A wonderful plant to attract bees and butterflies to your garden as they love the big flat umbels of flowers. The mosaic of colours in each flower make it a particularly good flower to use in bouquets and floral work.  Very easy care once established as it is very drought tolerant but a covering of mulch will retain some moisture.  Like other Achilleas, the more you trim the flowers, the more you will be rewarded with new ones.',
      dimensions: 'Height with flowers to 50cm x 35cm Wide',
      price: 11.00,
      stock: 15,
      potSize: '1.2 litres',
    },
  })

  const flower3 = await prisma.plant.upsert({
    where: { name: 'Ajuga reptans "Blueberry"' },
    update: {},
    create: {
      name: 'Ajuga reptans "Blueberry"',
      typeId: 1,
      description: 'This gorgeous little Ajuga reptans | Blueberry Muffin is a vigorous evergreen grown cover that has the prettiest petite blueberry-blue coloured flowers and small thick leaves which are quick to form a dense mat of attractive rosettes of leaves that have a bronzey coloured flush in mid-spring. The green leaves contrast beautifully with the blueberry coloured flowers. Ajuga reptans is valued for its wonderful ability to be able to spread and makes an attractive colourful groundcover that will thrive in shady areas where grass has difficulty growing. A perfect choice for planting between stepping stones in wall crevices, shady areas under plants and even is a great choice for a pot.  Ground hugging this lovely little plant remains attractive all year round.',
      dimensions: 'Height with flowers to 15cm x 45cm Wide',
      price: 10.00,
      stock: 8,
      potSize: '1.2 litres',
    },
  })

  const shrub1 = await prisma.plant.upsert({
    where: { name: 'Aciphylla Dieffenbachii' },
    update: {},
    create: {
      name: 'Aciphylla Dieffenbachii',
      typeId: 3,
      description: 'Droopy,green leaves with soft points, gold/yellow flowers.',
      dimensions: 'Height to 0.8-1.0m',
      price: 4.00,
      stock: 16,
      potSize: '1.2 litres',
    },
  })

  const shrub2 = await prisma.plant.upsert({
    where: { name: 'Abelia Kaleidoscope' },
    update: {},
    create: {
      name: 'Abelia Kaleidoscope',
      typeId: 3,
      description: 'An attractive, compact shrub with multi-coloured foliage that becomes a lovely orange-bronze colour through winter. Produces clusters of white flowers in mid to late spring and through summer. Plant in full sun or partial shade, average type soil that is free-draining. May be grown in containers, trim to shape.',
      dimensions: 'Height 1m to 1.5m',
      price: 15.87,
      stock: 5,
      potSize: 'N/A',
    },
  })

  const shrub3 = await prisma.plant.upsert({
    where: { name: 'Abutilon Lucky Lantern Red' },
    update: {},
    create: {
      name: 'Abutilon Lucky Lantern Red',
      typeId: 3,
      description: 'A compact bushy shrub covered in vibrant glossy red bell shaped flowers. Fantastic display of colour in containers or patio. Well drained soil in full sun.',
      dimensions: '50 X 50cm',
      price: 13.50,
      stock: 20,
      potSize: 'N/A',
    },
  })


  const trees1 = await prisma.plant.upsert({
    where: { name: 'Apple Granny Smith' },
    update: {},
    create: {
      name: 'Apple Granny Smith',
      typeId: 2,
      description: 'A bright green apple with a tangy tart taste. Suitable for eating (if you like tart) and for cooking, resists browning when cut. Suits most climates. Self fertile and a good pollinator for other varieties. Harvest in May with a long picking period. Tip bearing. Best in a sunny, sheltered site in free draining soil.',
      dimensions: 'N/A',
      price: 13.50,
      stock: 20,
      potSize: '25L',
    },
  })

  const trees2 = await prisma.plant.upsert({
    where: { name: 'Blackberry Black Satin' },
    update: {},
    create: {
      name: 'Blackberry Black Satin',
      typeId: 2,
      description: 'This thornless, heat tolerant blackberry is a prolific producer of deliciously sweet and juicy, deep blue-black berries - that can be harvested without getting pricked by thorns! Small, soft pink flowers appear on second year wood, the semi-erect canes yielding a reliable crop of large blackberries in midsummer. Deciduous.',
      dimensions: 'N/A',
      price: 17.09,
      stock: 20,
      potSize: '12cm',
    },
  })

  const promoCode1 = await prisma.promoCode.upsert({
    where: { name: 'Take15' },
    update: {},
    create: {
      name: 'Take15',
      expirationDate: new Date(2022, 12, 7, 0, 0, 0)
    },
  })

  const order1 = await prisma.order.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: 2,
      total: 500.00,
      promoCodeId: 1,
      addressStreet1: faker.address.streetAddress(),
      addressStreet2: '1a',
      addressCity: faker.address.city(),
      addressRegion: faker.address.county(),
      addressZip: 121212,
      // this will be an enum
      status: 'payed'
    },
  })

  const order2 = await prisma.order.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: 3,
      total: 600.00,
      promoCodeId: 1,
      addressStreet1: faker.address.streetAddress(),
      addressStreet2: '1a',
      addressCity: faker.address.city(),
      addressRegion: faker.address.county(),
      addressZip: 121212,
      // this will be an enum
      status: 'open'
    },
  })

  const orderItem1 = await prisma.orderItem.upsert({
    where: { id: 1 },
    update: {},
    create: {
      orderId: 1,
      plantId: 1,
      quantity: 3,
    },
  })

  const orderItem2 = await prisma.orderItem.upsert({
    where: { id: 2 },
    update: {},
    create: {
      orderId: 1,
      plantId: 2,
      quantity: 4,
    },
  })

  const orderItem3 = await prisma.orderItem.upsert({
    where: { id: 3 },
    update: {},
    create: {
      orderId: 1,
      plantId: 3,
      quantity: 10,
    },
  })
}


main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
