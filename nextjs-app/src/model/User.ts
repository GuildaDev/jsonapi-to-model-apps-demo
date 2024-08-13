import { BaseEntity } from "@guildadev/jsonapi-to-model";

export class User extends BaseEntity {
  get name() {
    return this.getAttribute("name");
  }
}
