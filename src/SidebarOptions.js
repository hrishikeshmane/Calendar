import React from 'react'
import { setPage } from './features/appSlice';
import { useDispatch } from 'react-redux';
import './App.css';

function SidebarOptions() {
    const dispatch = useDispatch();
    const items = ["Overview", "Calendar", "PatientList", "Messages", "Settings"];
    return (
        <>
            {items.map((item,id) => (
                // <div key={item.id} className="coin__option" onClick={() => console.log(item.name)}>
                <div
                    key={id}
                    className="sidebar__option"
                    onClick={() => dispatch(
                        setPage({
                            page: item
                        })
                    )}>
                    <h4>{item}</h4>
                </div>
            ))}
            </>
    )
}

export default SidebarOptions
