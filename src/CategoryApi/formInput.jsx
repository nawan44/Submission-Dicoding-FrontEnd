import React from 'react';

class FormInput extends React.Component {
    render() {
        const { handlerCancel, functionChange, functionChecked, functionSave, categoryModel, error } = this.props;
        return (
            <div>

                <div class="modal fade" id="modal-default">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">Create Data</h4>
                            </div>
                            <div class="modal-body">

                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">Initial</label>

                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" value={categoryModel.initial} onChange={functionChange('initial')} />
                                    </div>
                                    <span style={{ color: "red" }}>{error["initial"]}</span>
                                </div>

                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">Name</label>

                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" value={categoryModel.name} onChange={functionChange('name')} />
                                    </div>
                                </div>
                                <label>Active</label>
                                <input type="checkbox" checked={categoryModel.isActive} onChange={functionChecked('isActive')} /> <br />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal" onClick={handlerCancel}>Close</button>
                                <button type="button" class="btn btn-primary" onClick={functionSave}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default FormInput