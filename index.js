import {config} from "dotenv";
import {ChatGoogleGenerativeAI} from  "@langchain/google-genai"
import { response } from "express";
import { PromptTemplate } from "@langchain/core/prompts";

config();

const model=new ChatGoogleGenerativeAI({
    model:"gemini-3-flash-preview",
    apiKey:process.env.GEMINI_API
})
const prompt=PromptTemplate.fromTemplate(
    "explain {topic} in simple way like ELT5 ,make sure to includethe core concept and example in the explanation"
)
const chain=prompt.pipe(model)
chain.invoke({topic:"express"}).then((response)=>{
    console.log(response.content);
})
