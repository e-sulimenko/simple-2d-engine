export type Tag = string;

export class Tags {
  private tags: Tag[] = [];

  add(...rest: Tag[]) {
    this.tags.push(...rest);
  }

  hasTag(tag: Tag) {
    return this.tags.includes(tag);
  }
}
