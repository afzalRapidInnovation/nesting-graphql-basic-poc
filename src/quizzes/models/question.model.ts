import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Question{
    @Field()
    readonly text : string;

    @Field({nullable:true})
    readonly isMarkDown:boolean
}