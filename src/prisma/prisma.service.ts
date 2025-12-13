

import * as dotenv from 'dotenv'
dotenv.config();
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client'; 
// Importar o adaptador correto para PostgreSQL
import { PrismaPg } from '@prisma/adapter-pg'; 
// Importar o driver (cliente) que o adaptador usa
import { Pool } from 'pg'; 

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
   

    const adapter = new PrismaPg({connectionString:process.env.DATABASE_URL!}); // Usar configuração padrão do adaptador

    
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect(); 
  }
}