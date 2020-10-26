import React, {useEffect} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import {OrdersColumns, ProviderColumns, UsersColumns} from "../../components/Table/columns";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import CreateOrEditProviderContainer from "../../components/Providers/CreateOrEditProviderContainer";
import CreateOrEditOrdersContainer from "../../components/Orders/CreateOrEditOrdersContainer";
import RecordViewer from "../../components/RecordViewer/RecordViewer";
import {connect} from "react-redux";
import {writeRecordId} from "../../redux/reducers/tableReducer";


const ProvidersPage = ({writeRecordId,recordViewId,history})=>{
    const data =[{
        id: '1',
        full_name: 'Анисимова Виктория Викторовна',
        phone: '+996 777 77-77-77',
        dir: '123321',
        email: 'fsdfsds',
        status: true
    },
        {
            id: '2',
            full_name: 'Анисимова Виктория Викторовна',
            phone: '+996 777 77-77-77',
            dir: '123321',
            email: 'fsdfsds',
            status: false
        },
        {
            id: '3',
            full_name: 'Анисимова Виктория Викторовна',
            phone: '+996 777 77-77-77',
            dir: '123321',
            email: 'fsdfsds',
            status: false
        }]
    const clickOnRecord=(id)=>{
        writeRecordId(id)
        history.push('/providers/view/'+id)
    }
    const recordViewValue =  data.find(item=>item.id===recordViewId);
    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <Switch>
                        <Route exact path={'/providers'}>
                            <h2 className='page-content__title'>Поставщики</h2>
                            <div className='page-functional'><SearchPanel /><AddBtn urlToCreate={'/providers/create-provider'}/><DeleteBtn/></div>
                            <Table data={data} columns={ProviderColumns} handlerClick={clickOnRecord}/>
                        </Route>
                        <Route exact  path={'/providers/create-provider'}>
                            <CreateOrEditProviderContainer urlToTable={'/providers'} loadData={false}/>
                        </Route>
                        <Route exact path={'/providers/update-provider'}>
                            <CreateOrEditProviderContainer urlToTable={'/providers'} loadData={true}/>
                        </Route>
                        <Route exact path={'/providers/view/:id'}>
                            <RecordViewer
                                titles={['ФИО',"Телефон","E-mail","Статус"]}
                                values={recordViewValue}
                                urlToUpd={'/providers/update-provider'}
                                urlToTable={'/providers'}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>




        </>
    )
}

const mapStateToProps = state=>{
    return{
        recordViewId: state.table.recordViewId
    }
}
export  default  connect(mapStateToProps,{writeRecordId})(withRouter(ProvidersPage))