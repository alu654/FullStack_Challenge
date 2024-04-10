import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ServicesService } from '../src/services/services.service';
import { Service } from '../src/entityes/service.entity';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const servicesService = app.get(ServicesService);

  const servicesData = [
    {
      name: "Classic Manicure",
      description: "Includes filing, moisturizing, and permanent polish application.",
      category: "Hands and Feet"
    },
    {
      name: "Spa Pedicure",
      description: "Spa pedicure with paraffin bath for soft and relaxed feet.",
      category: "Hands and Feet"
    },
    {
        "name": "Cut and Style",
        "description": "Custom haircut plus washing and styling.",
        "category": "Hair"
      },
      {
        "name": "Full Color",
        "description": "Full hair coloring with ammonia-free products.",
        "category": "Hair"
      },
      {
        "name": "Deep Tissue Massage",
        "description": "Intense massage to alleviate muscle tension.",
        "category": "Massage and Spa"
      },
      {
        "name": "Anti-Aging Facial",
        "description": "Rejuvenating facial treatment with natural products.",
        "category": "Facial Care"
      },
      {
        "name": "Waxing",
        "description": "Body waxing for smooth, hair-free skin.",
        "category": "Hair Removal"
      },
      {
        "name": "Hair Treatment",
        "description": "Repairing treatment for damaged or dyed hair.",
        "category": "Hair"
      },
      {
        "name": "Professional Makeup",
        "description": "Makeup services for special events.",
        "category": "Makeup"
      },
      {
        "name": "Facial Cleansing",
        "description": "Deep cleansing with impurity extraction and mask application.",
        "category": "Facial Care"
      }
  ];

  for (const serviceData of servicesData) {
    const service = new Service();
    service.name = serviceData.name;
    service.description = serviceData.description;
    service.category = serviceData.category;
    await servicesService.create(service); 
  }

  console.log('Seeding complete!');
  await app.close();
}

seed().catch(error => {
  console.error('Seeding failed:', error);
  process.exit(1);
});


