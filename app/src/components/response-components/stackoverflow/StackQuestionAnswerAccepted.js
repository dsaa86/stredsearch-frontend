import '../../SearchAppComponentsStyle.css';

export default function StackQuestionAnswerAccepted({accepted}) {
    return (
        <>
            <div className="row">
                <div className='col-6'>
                    <div className={`col ${ accepted === true ? "stack-question-accepted" : "stack-question-not-accepted" }`}>
                            { accepted === true ? "Accepted Answer" : "No Accepted Answer" }
                    </div>
                </div>
            </div>
        </>
    );
}