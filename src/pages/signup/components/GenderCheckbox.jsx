import React from 'react'

const GenderCheckbox = ({handleGenderSelect,seletedGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Male</span>
                <input name="gender" value={"male"} onChange={handleGenderSelect} type="checkbox" className='checkbox border-slate-900' checked={seletedGender==='male'} />
            </label>
        </div>
        <div className="form-control">
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>female</span>
                <input name="gender" value={"female"} onChange={handleGenderSelect} type="checkbox" className='checkbox border-slate-900' checked={seletedGender==='female'} />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox