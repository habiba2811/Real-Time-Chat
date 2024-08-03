function GenderCheckbox() {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-blue-100">Male</span>
                <input type="checkbox" className="checkbox checkbox-warning" />
            </label>
        </div>
        <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-blue-100">Female</span>
                <input type="checkbox" className="checkbox checkbox-warning" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox

// STARTER CODE FOR THE GENDERCHECKBOX COMPONENT


/*function GenderCheckbox() {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-blue-100">Male</span>
                <input type="checkbox" className="checkbox checkbox-warning" />
            </label>
        </div>
        <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-blue-100">Female</span>
                <input type="checkbox" className="checkbox checkbox-warning" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox*/