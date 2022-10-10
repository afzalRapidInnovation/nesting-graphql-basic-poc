import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class QuestionInput {
    @Field()
    readonly quizId :number;

    @Field()
    readonly text : string;

    @Field({ nullable: true})
    readonly isMarkDown: boolean;
}