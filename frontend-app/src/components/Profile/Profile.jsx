import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import profileImg from '../../images/Unknown.jpg'
import Avatar from 'react-avatar-edit';
import './profile.css'
        

const Profile = () => {
  const [userData, setUserData] = React.useState({
    image: ''
  })
  const [imageCrop, setImageCrop] = React.useState("")
  const [src, setSrc] = React.useState(false)
  const [Profile, setProfile] = React.useState([])
  const [pview, setPview] = React.useState(false)

  // const profileFinal = profile.map((item) => item.pview)

  // const onClose = () =>{
  //   setPview(null)
  // }

  // const onCrop = (view) =>{
  //   setPview(view)
  // }

  // const saveCropImage = () =>{
  //   setProfile([...profile, {pview}])
  //   setImageCrop(false)
  // }


  return (
    <div className='imgContainer'>

      <img className='imgProfile'
        alt="profile image" 
        onClick={()=> setImageCrop(true)}
        src={profileImg}
        // src={profileFinal.length ? profileFinal : userData.image}
        />
    
       {/* <Dialog
        visible={imageCrop}
        header={()=>(
          <p htmlFor="" className="imgText">
            Загрузить фото
          </p>
        )}
        onHide={()=>setImageCrop(false)}
       >
        <div className='avatar'>
          <Avatar
            width={500}
            height={400}
            onCrop={onCrop}
            onClose={onClose}
            src={src}
            shadingColor={"#474649"}
            backgroundColor={"#67aadecd"}
          />
          <div className='firstContainer'>
            <div className='SecondContainer'>
              <button
                onClick={saveCropImage}
                label="Сохранить"
                icon = 'pi pi-check'
              ></button>
            </div>
          </div>
        </div>
       </Dialog> */}

       <InputText
        className='img-inpt'
        type='file'
        accept='/image/*'
        onChange={(event)=>{
          const file = event.target.files[0];
          if (file && file.type.substring(0,5)==="image"){
            setUserData(file)
          }else{
            setUserData(null)
          }
        }}/>
    
    </div>
  )
} 

export default Profile