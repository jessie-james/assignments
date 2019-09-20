import React from 'react';
function CreateSurvey() {
    return (

        <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add New Todo</h4>

                <input
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Title" />

                <button>+</button>
            </form>
        </div>
    )
}
export default CreateSurvey