import React from "react";
import "./AdPart.css"
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

export default function () {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="content" className="content content-full-width">
                            <div className="profile-content">
                                <div className="tab-content p-0">
                                    <div className="tab-pane fade active show" id="profile-post">
                                        <ul className="timeline">
                                            <li>
                                                <div className="timeline-time">
                                                    <span className="date">Середа</span>
                                                    <span className="time">19:00</span>
                                                </div>
                                                <div className="timeline-icon">
                                                    <a href="javascript:;">&nbsp;</a>
                                                </div>
                                                <div className="timeline-body">
                                                    <div className="timeline-header">
                                                        <span className="userimage">
                                                            <img src="https://image.flaticon.com/icons/png/512/99/99907.png" alt="" />
                                                        </span>
                                                        <span className="username">Домашня група</span>
                                                    </div>
                                                    <div className="timeline-content">
                                                        <p>
                                                            Інформація про групу
                                                        </p>
                                                    </div>
                                                    <div className="timeline-likes">
                                                        <div className="stats-right">
                                                            <span className="stats-text">Присутніх на групі було ...</span>
                                                        </div>
                                                        <div className="stats">
                                                            <span className="stats-total">фото</span>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-footer">
                                                        <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>Вірш дня</a>
                                                    </div>
                                                </div>
                                            </li>                                            
                                            <li>
                                                <div className="timeline-time">
                                                    <span className="date">П'ятнця</span>
                                                    <span className="time">19:30</span>
                                                </div>
                                                <div className="timeline-icon">
                                                    <a href="javascript:;">&nbsp;</a>
                                                </div>
                                                <div className="timeline-body">
                                                    Loading...
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-time">
                                                    <span className="date">Субота</span>
                                                    <span className="time">20:00</span>
                                                </div>
                                                <div className="timeline-icon">
                                                    <a href="javascript:;">&nbsp;</a>
                                                </div>
                                                <div className="timeline-body">
                                                    <div className="timeline-header">
                                                        <span className="userimage"><img src="https://icons-for-free.com/iconfiles/png/512/windows+10+cinema+icons+Family-1320567861682845728.png" alt="" /></span>
                                                        <span className="username">Сімейне зібрання</span>
                                                    </div>
                                                    <div className="timeline-content">
                                                        <p>Місце проведення: дім молитви ЄХБ</p>
                                                    </div>
                                                    <div className="timeline-footer">
                                                        <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>„А коли хтось про своїх, особливо ж про домашніх не дбає, той віри відцурався: він гірший, ніж невірний“ (1 Тимофія 5: 8)</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-time">
                                                    <span className="date">07 Листопада 2021</span>
                                                    <span className="time">19:00</span>
                                                </div>
                                                <div className="timeline-icon">
                                                    <a href="javascript:;">&nbsp;</a>
                                                </div>
                                                <div className="timeline-body">
                                                    <div className="timeline-header">
                                                        <span className="userimage">
                                                            <img src="data:image/png;base64,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" alt="" />
                                                        </span>
                                                        <span className="username">Вечірнє зібрання</span>
                                                    </div>
                                                    <div className="timeline-content">

                                                        <p className="lead">
                                                            <i className="fa fa-quote-left fa-fw pull-left">Інформація про...</i>
                                                        </p>
                                                        <div className="timeline-footer">

                                                            <div className="timeline-likes">
                                                                <div className="stats-right">
                                                                    <span className="stats-text">Присутніх на зібранні було ...</span>
                                                                </div>
                                                                <div className="stats">
                                                                    <span className="stats-total">Головна думка</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}