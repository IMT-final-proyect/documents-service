import { FindOperator } from "typeorm";

export interface DocumentQuery {
  entityId?: number | FindOperator<number>,
  entityType?: number | FindOperator<number>,
  expirationDate?: Date | FindOperator<String>,
  active?: boolean
}