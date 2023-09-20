import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { typesFeedback, typesobjeto } from "../WidgetForm";
import { FeedbackSuccessStep } from "./feedbackSuccessStep";


interface FeedbackContetStepProp {
    feedbackType: typesFeedback;
    objeto: typesobjeto;
    //onFeedbackTypeChanged: (type:typesFeedback) =>void;
    onFeedbackTypeChanged: (type: null) => void;
    returnSent: (type: boolean) => void;
}

//estou no minuto 1:05:27

export function FeedbackContetStep({ feedbackType, objeto, onFeedbackTypeChanged, returnSent }: FeedbackContetStepProp) {
    const ObjwhitRightIndex = objeto[feedbackType]

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState("")


    function saveScreenshot(texte: string | null) {
        setScreenshot(texte)
    }


    function handleSubmitFeedback(event: FormEvent) {

        event.preventDefault();

        console.log({
            screenshot, comment
        })

        returnSent(true)
    }


    return (
        <>
            <header>

                <button type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={() => { onFeedbackTypeChanged(null) }}
                >

                    <ArrowLeft weight="bold" className="w-4 h-4" />

                </button>

                <span className="text-xl leading-6 flex items-center gap-2 " >

                    <img src={ObjwhitRightIndex.img.source} alt={ObjwhitRightIndex.img.alt} className="w-6 h-6" />
                    {ObjwhitRightIndex.title}


                </span>

                <CloseButton />

            </header>


            <form
                onSubmit={handleSubmitFeedback}
                className="my-4 w-full"
            >
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md  focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder={`${ObjwhitRightIndex.descriptionPlacehover}`}
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">

                    <ScreenshotButton
                        onScreenShotTook={saveScreenshot}
                        screenshot={screenshot}
                    ></ScreenshotButton>

                    <button
                        type="submit"
                        disabled={comment.length === 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"

                    >
                        Enviar Feedback!

                    </button>

                </footer>

            </form>

        </>
    )

}