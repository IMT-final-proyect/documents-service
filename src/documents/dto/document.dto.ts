import { DocumentTypeDto } from "src/types/type.dto";

export class DocumentDto {
  id?: number;
  expirationDate?: Date;
  state?: number;
  type?: DocumentTypeDto;
  entityId?: number;
}