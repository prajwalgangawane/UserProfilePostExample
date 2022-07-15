export declare class PostCreateManyInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    title: string;
    content?: string | undefined;
    published?: boolean | undefined;
    authorId: number;
}
