import { CloseButton } from "../CloseButton";
import ImgProbleblaurl from '../../assets/bug.svg';
import ImgIdeaUrl from '../../assets/idea.svg';
import ImgThoughtUrl from '../../assets/thought.svg';
import { useState } from "react";

import { FeedbackTypeStep } from "./Steps/feedbackTypeStep"
import { FeedbackContetStep } from "./Steps/feedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/feedbackSuccessStep";

export const fedbackTypes = {
    BUG: {
        title: "Problema",
        img: {
            source: ImgProbleblaurl,
            alt: "Imagem de um inseto"
        },
        descriptionPlacehover: " Díga-nos, qual seu problema ?",

    },
    IDEA: {
        title: "Ideias",
        img: {
            source: ImgIdeaUrl,
            alt: "imagem de uma lampada"
        },
        descriptionPlacehover: " Díga-nos, qual sua ideia ? (:",

    },
    OTHER: {
        title: "Outros",
        img: {
            source: ImgThoughtUrl,
            alt: "Imagem de uma nuvem"
        },
        descriptionPlacehover: " Díga-nos, o que tem em mente?",


    },
}

export type typesFeedback = keyof typeof fedbackTypes;
export type typesobjeto = typeof fedbackTypes;

//Object.entries(fedbackTypes )==>
/**
 * [
 *      [BUG,{...}],
 *      [IDEA,{...}],
 *      [OTHER,{...}],
 * ]55:21
 */
export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<typesFeedback | null>(null)
    const [Sentcomment, setSentcomment] = useState<boolean>(false)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">


            {!Sentcomment ?
                <>
                    {!feedbackType ?
                        (
                            <>
                                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                                <p>Hello world!</p>
                            </>
                        )
                        :
                        (
                            <FeedbackContetStep
                                feedbackType={feedbackType}
                                objeto={fedbackTypes}
                                onFeedbackTypeChanged={setFeedbackType}
                                returnSent={setSentcomment}
                            />
                        )

                    }
                </>
                :
            <FeedbackSuccessStep onFeedbackTypeChangedBack={setSentcomment}/>}




            <footer className="text-xs text-neutral-400">
                feito por <a className="underline underline-offset-2" href="https://github.com/isaqu33">Isaque</a> !

            </footer>

        </div>
    );
}