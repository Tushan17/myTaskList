export class CreateTask {
    title: string;
    description: string;
    long_description: string;

    constructor(
        title: string,
        description: string,
        long_description: string
    ) {
        this.title = title;
        this.description = description;
        this.long_description = long_description;

    }
}
