import React from 'react';
import './category.css'
import FormInput from './formInput'

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
            ListData:
                [{ id: 1, initial: 'FSH', name: 'Fashion', isActive: true },
                { id: 2, initial: 'FOO', name: 'Food', isActive: true },
                { id: 3, initial: 'ELC', name: 'Electronic', isActive: true },
                { id: 4, initial: 'FUR', name: 'Furniture', isActive: true },
                { id: 5, initial: 'DRN', name: 'Drink', isActive: true },

                ],
            isShow: false,
            categoryModel: this.itemModel,
            mode: ''
        }
    }

    handlerCreate = () => {

        const idMax = this.state.ListData.length;

        this.setState({
            isShow: true,
            mode: 'create',
            categoryModel: {
                ...this.state.categoryModel,
                ['id']: idMax + 1
            }
        })
    }

    hendleEdit = (id) => {
        const selected = this.state.ListData.find(a => a.id === id);

        this.setState({
            isShow: true,
            mode: 'edit',
            categoryModel: selected
        })
    }

    handlerCancel = () => {

        this.setState({
            isShow: false
        })
    }

    hendleDelete = (data) => {
        const { ListData } = this.state;
        const IndexData = ListData.findIndex(dt => dt.id === data.id);
        if (window.confirm(`Apakah anda yakin untuk menghapus data ${data.name}`)) {
            ListData.splice(IndexData, 1);
        }

        this.setState({
            ListData: ListData
        })

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

    functionSave = () => {
        const list = this.state.ListData;

        if (this.state.mode === 'create') {
            list.push(this.state.categoryModel);
        }
        else {
            const IndexData = list.findIndex(dt => dt.id === this.state.categoryModel.id);
            this.state.ListData[IndexData] = {
                id: this.state.categoryModel.id,
                initial: this.state.categoryModel.initial,
                name: this.state.categoryModel.name,
                isActive: this.state.categoryModel.isActive
            }
        }
        this.setState({
            ListData: list,
            isShow: false
        })

    }


    render() {
        return (
            <div>
                <p>Data Category</p>
                {JSON.stringify(this.state.categoryModel)}

                {this.state.isShow ?
                    <FormInput handlerCancel={this.handlerCancel} functionChange={this.functionChange}
                        functionChecked={this.functionChecked} functionSave={this.functionSave}
                        categoryModel={this.state.categoryModel} />
                    : null} <br />


                <button className="btn btn-primary" data-toggle="modal" data-target="#modal-default" 
                        onClick={this.handlerCreate}>Create New</button>
                        
                <table id="category">
                    <tr>
                        <th>Id</th>
                        <th>Initial</th>
                        <th>Name</th>
                        <th>isActive</th>
                        <th>Action</th>

                    </tr>
                    {
                        this.state.ListData.map(data => {
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.initial}</td>
                                    <td>{data.name}</td>
                                    <td>{data.isActive.toString()}</td>
                                    <td><button onClick={() => this.hendleEdit(data.id)}>Edit</button>
                                        <button onClick={() => this.hendleDelete(data)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}

export default Index;