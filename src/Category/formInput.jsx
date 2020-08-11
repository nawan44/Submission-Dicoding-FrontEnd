import React from 'react';

class FormInput extends React.Component {
    render() {
        const { handlerCancel, functionChange , functionChecked, functionSave, categoryModel} = this.props;
        return (
            <div>
                <p>Create Data</p>
                <label>Initial</label>
                <input type="text" value={categoryModel.initial} onChange={functionChange('initial')}/> <br />

                <label>Name</label>
                <input type="text" value={categoryModel.name} onChange={functionChange('name')}/> <br />

                <label>Active</label>
                <input type="checkbox" checked={categoryModel.isActive} onChange={functionChecked('isActive')}/> <br />

                <button onClick={functionSave}>Save Change</button>
                <button onClick={handlerCancel}>Cancel</button>


            </div>
        )
    }
}

export default FormInput