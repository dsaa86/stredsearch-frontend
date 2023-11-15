import {useEffect, useState} from 'react';
import './StackoverflowResponseComponentsStyle.css'


export default function StackQuestionTags({tags}) {
    const tag_list = tags.split(", ");

    return (
        <div className="row">
            <div className="col stack-question-tags">
                {
                    tag_list.map((tag, index) => {
                        return <div className="question-tag-element" key={index}>
                            {tag}
                        </div>
                    })
                }
            </div>
        </div>
    );
}