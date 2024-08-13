import { Attribute, BaseEntity } from "@guildadev/jsonapi-to-model";

export class User extends BaseEntity {
  @Attribute()
  declare name: string;
}
