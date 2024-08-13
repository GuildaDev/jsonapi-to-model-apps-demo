import { Attribute, BaseEntity, Included } from "@guildadev/jsonapi-to-model";

export class Item extends BaseEntity {
  @Attribute()
  declare title: string;

  @Included()
  declare photos: any[];
}
