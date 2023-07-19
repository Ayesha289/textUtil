import React from 'react'

export default function About(props){

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#212529',
        backgroundColor: props.mode === 'dark' ? '#212529' : 'white'
    }

    return (
        <>
            <div className='container my-3' style={myStyle}>
                <h1>About Us</h1>
                <div class="accordion" id="accordionExample" style={myStyle}>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={myStyle}>
                                Text Utils is a user-friendly website that provides a range of useful text analysis tools. It offers convenient features to manipulate and transform text based on user preferences. Text Utils is designed to be accessible and intuitive, ensuring that users can quickly and easily manipulate their text according to their needs. Whether you're a student, professional, or casual user, this website provides a practical set of tools for text analysis and manipulation.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header" id="headingTwo" style={myStyle}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                            <div class="accordion-body" style={myStyle}>
                                TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters, thus it is suitable for writing text with word/character limit.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Browser compatible</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
                            <div class="accordion-body" style={myStyle}>
                                This word counter software works on any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf documnet, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}