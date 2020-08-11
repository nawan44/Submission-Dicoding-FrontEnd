import React from 'react';
import CategoryService from '../Service/CategoryService';
import FormInput from './formInput';



class Index extends React.Component {
    itemModel = {
        id: 0,
        initial: '',
        name: '',
        isActive: false
    }

    constructor() {
        super();
        this.state = {
            ListData: [],
            categoryModel: this.itemModel,
            mode: '',
            error: {}
        }
    }

    componentDidMount() {
        this.loadList();
    }

    loadList = async () => {
        const respon = await CategoryService.getAll();
        if (respon.success) {
            this.setState({
                ListData: respon.result
            })
        }
    }

    handlerCreate = () => {

        this.setState({
            mode: 'create',
            categoryModel: this.itemModel
        })
    }

    hendleEdit = async (id) => {
        const respon = await CategoryService.getById(id);

        if (respon.success) {
            this.setState({
                mode: 'edit',
                categoryModel: respon.result
            })
        }
    }

    handlerCancel = () => {

        this.setState({
            isShow: false
        })
    }

    functionValidasi() {
        let field = this.state.categoryModel;
        let error = {};
        let formIsValild = true;

        if (!field["initial"]) {
            formIsValild = false;
            error["initial"] = "Initial Wajib diisi!"
        }
        this.setState({
            error: error
        })
        return formIsValild;
    }

    functionChange = name => ({ target: { value } }) => {
        this.setState({
            categoryModel: {
                ...this.state.categoryModel,
                [name]: value
            }
        })
    }

    functionChecked = name => ({ target: { checked } }) => {
        this.setState({
            categoryModel: {
                ...this.state.categoryModel,
                [name]: checked
            }
        })
    }
    hendleDelete = async (data) => {

        if (window.confirm(`Apakah anda yakin untuk menghapus data ${data.name}`)) {
            const respon = await CategoryService.Delete(data)
            if (respon.success) {
                alert('Success : ' + respon.result);
                this.loadList();
            }
        }

    }

    functionSave = async () => {
        const { categoryModel, mode } = this.state;

        if (mode === 'create') {
            if (this.functionValidasi()) {
                const respon = await CategoryService.Create(categoryModel);
                if (respon.success) {
                    alert('Success : ' + respon.result);
                    this.loadList();
                }
                else {
                    alert('Error :', respon.result);
                }
            }
        }

    }


    render() {
        return (
            <div>
                <h3>Category API</h3>

                <FormInput handlerCancel={this.handlerCancel} functionChange={this.functionChange}
                    functionChecked={this.functionChecked} functionSave={this.functionSave}
                    categoryModel={this.state.categoryModel} error={this.state.error} />

                <button className="btn btn-primary" data-toggle="modal" data-target="#modal-default"
                    onClick={this.handlerCreate}>Create New</button>

                <table className="table table-bordered table-hover table-striped dataTable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Initial</th>
                            <th>Name</th>
                            <th>isActive</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ListData.map(data => {
                                return (
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.initial}</td>
                                        <td>{data.name}</td>
                                        <td>{data.isActive.toString()}</td>
                                        <td><button onClick={() => this.hendleEdit(data.id)} data-toggle="modal" data-target="#modal-default">Edit</button>
                                            <button onClick={() => this.hendleDelete(data)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Index