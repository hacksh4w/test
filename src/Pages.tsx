// import { FC } from 'react';
//import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Pages = () => {

type FormValues = {
    firstName : string 
    lastName : string
    email : string
    phoneNumber : number 
    address : string
  }
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;
  //   console.log(errors);

const submitHandeler = (data : FormValues) => { 
    console.log('Form submitted', data)
};
    return(
        <div className="ui-page">
            <form>
            <div className="personal-details-container">  {/*/onSubmit={handleSubmit(onSubmit)} */}
                <h3>Personal Details:</h3>
                <div className="Name">
                    <label htmlFor="name">Name (in Block Letters) :</label>
                    <input type="text" placeholder='Name'maxLength={30} />
                </div>
                <div className="DOB">
                    <label htmlFor='DOB'>Date Of Birth(DD/MM/YYYY): </label>
                    <input type="date"placeholder='DD/MM/YYYYYY'/>
                </div>
                <div className="Gender-caste-Religion">
                    <label htmlFor='Gender'>Gender: </label>
                    <select name="Gender" id="G" defaultValue="None">
                        <option value="none" disabled hidden>Select an Option</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Caste'>Caste: </label>
                    <input name="Caste" id="caste"maxLength={20}/>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Religion'>Religion: </label>
                    <input name="religion" id="religion" maxLength={20}/>

                </div>
                <div className="Nativity-Community">
                    <label htmlFor='Nativity'>Nativity: </label>
                    <input name="Nativity" id="nativity" maxLength={20}/>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Community'>Community: </label>
                    <input name="Community" id="community" maxLength={20}/>
                </div>
                <div className="Villages-Taluk">
                    <label htmlFor='Villages'>Village: </label>
                    <input name="Village" id="village" maxLength={30}/>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Taluk'>Taluk : </label>
                    <input name="Taluk" id="taluk" maxLength={30}/>
                </div>
                <div className="Blood Group-Phone Number">
                    <label htmlFor='Blood Group'>Blood Group: </label>
                    <select name="bloodGroup" id="bloodgrp" defaultValue="None">
                        <option value="None" disabled hidden>Select Blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>Others</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Phone Number'>Student's Mobile: </label>
                    <input type="number" maxLength={15}/>
                </div>
                <div className="Email-AnnualIncome">
                    <label htmlFor='Email'>Email: </label>
                    <input type="email" maxLength={50} name="email"/>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='annualIncome'>Annual Income Of Parents: </label>
                    <input type="number" name="annualIncome" maxLength={9}/>
                </div>
            </div>
            </form>
            <div className="Fathers/Guardian-details">
                <form className="Fathers/Guardian-details">
                    <h3>Fathers/Guardians Details:</h3>
                    <div className='Name-Occupation'>
                        <label className='Name'>Name: </label>  
                        <input type="text" className="name" placeholder="Name"maxLength={30}/>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Occupation'>Occupation: </label>
                        <input type="text" className="occupation" placeholder="Occupation" maxLength={30}/>
                    </div>
                    <div className="email-phone">
                        <label className='email'>Email: </label>
                        <input type="email" className="email" placeholder="Parent's Email" maxLength={50}/>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Phone' placeholder="Phone">Phone Number 1 : </label>
                        <input type="number" className="phone" placeholder="Phone Number" maxLength={15}/>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Phone' placeholder="Phone">Phone Number 2 : </label>
                        <input type="number" className="phone" placeholder="Phone Number" maxLength={15}/>
                    </div>
                </form>
            </div>
            <div className="PermenantAddress">
                <h3>Permanent Address: </h3>
                <form className="PermenantAddress">
                    <div className="PermenantAddress">
                        <label className='Address'>Permanent Address : </label>
                        <input type="text" className="PermenantAddress" placeholder="Address" maxLength={40}/>
                        <br></br>
                        <label className='Pin'>Pin Code : </label>
                        <input type="text" className="PermenantPinCode" placeholder="PIN" maxLength={7}/>
                        <br></br>
                        <label className='District'>District : </label>
                        <input type="text" className="PermenantDistrict" placeholder="District" maxLength={30}/>
                        <br></br>
                        <label className='State'>State : </label>
                        <input type="text" className="State" placeholder="State" maxLength={30}/>
                    </div>
                </form>
            </div>
            <div className="PresentAddress">
                <h3>Present Address : </h3>
                <form className="PresentAddressform">
                    <div className="presentAddress">
                        <label className='address'>Present Address : </label>
                        <input  type="text" className="PresentAddress" placeholder="Address" maxLength={40}/>
                        <br></br>
                        <label className='Pin'>Pin Code : </label>
                        <input type="text" className="PermenantPinCode" placeholder="PIN" maxLength={7}/>
                        <br></br>
                        <label className='District'>District : </label>
                        <input type="text" className="PermenantDistrict" placeholder="District" maxLength={30}/>
                        <br></br>
                        <label className='State'>State : </label>
                        <input type="text" className="State" placeholder="State" maxLength={30}/>
                    </div>
                </form>
            </div>
            <div className="Qualification-Exam">
                <h3>Qualifying Examination Details: </h3>
                <form className="Qualification">
                    <div className="Qualification-Exam">
                        <label className="Exam-Label">Qualifying Exam : </label>
                        <input type="text" className="Exam" placeholder="Exam" maxLength={30}/>
                        &nbsp;&nbsp;&nbsp;
                        <label className="Exam-LabelRegno">Reg. No. Qual. Exam : </label>
                        <input type="text" className="Exam" placeholder="Reg. No." maxLength={30}/>
                    </div>
                    <div className="Qualifying-Board">
                        <label className='Board'>Qualifying Board : </label>
                        <input type="text" className="Board" placeholder="Qualifying Board" maxLength={50}/>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Percentage'>Percentage : </label>
                        <input type='float' className='Percentage' placeholder="Percentage" maxLength={5}/>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Year'>Year : </label>
                        <input type="year" placeholder="Year" maxLength={4}/>
                    </div>
                    <div className='NameOfInstitution'>
                        <label className="InstitutionName">Name Of Institution : </label>
                        <input type="text" placeholder="Institution Name" maxLength={50}/>
                    </div>
                </form>
            </div>
            <div className="KEAM-Details">
                <h3>KEAM Details : </h3>
                <form className="KEAM-Details">
                    <div className="RollKEAM-Details">
                        <label className="RollKEAM">KEAM Roll No. : </label>
                        <input type="number" placeholder='Roll No.' maxLength={10}/>
                        &nbsp;&nbsp;&nbsp;
                        <label className='AppKEAM'>KEAM Application No. : </label>
                        <input type="number" placeholder='Application No.' maxLength={10}/>
                        <br></br>
                        <label className='RankKEAM'>KEAM Rank : </label>
                        <input type="number" placeholder='Rank' maxLength={10}/>
                        <br></br>
                        <label className='Allotted-Branches'>Allotted Branch : </label>
                        <select className='AllotteBranch' defaultValue="None">
                            <option value="None" disabled hidden></option>
                            <option>Computer Science And Engineering (CS)</option>
                            <option>Computer Science and Business Systems(CSBS/CU)</option>
                            <option>Electronics And Communication Engineering(EC)</option>
                            <option>Electrical And Electronics Engineering(EEE)</option>
                            <option>Electronics(VLSI Design and Technology)</option>
                            <option>Electronics And Bio-Medical Engineering(EB)</option>
                            <option>Mechanical Engineering(ME)</option>
                        </select>
                    </div>

                    <button>Submit</button>
                 </form>
                <DevTool control = {control} /> 
            </div>
        </div>
    )
    }

export default Pages;