import { CloseButton } from "../../CloseButton";
import { fedbackTypes, typesFeedback } from "../WidgetForm";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: typesFeedback) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {


    return (
        <>
            <header>

                <span className="text-xl leading-6" > Deixe seu FeedBack! </span>

                <CloseButton />

            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(fedbackTypes).map(([key, value]) => {

                    return (
                        <button
                            className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                            key={key}
                            type="button"
                            onClick={() => { onFeedbackTypeChanged(key as typesFeedback) }}
                        >
                            <img src={value.img.source} alt={value.img.alt} />
                            <span>{value.title}</span>
                        </button>

                    );
                })}

            </div>
        </>
    )


}