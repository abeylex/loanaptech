import React from "react";
import "./Apply.css";
function Apply() {
    return(
        <div className="loan-card">
        <h2>Apply for Loan</h2>
<div className="input-group">
    <label>Full Name</label>
    <input type="text" placeholder="John Doe" required/>
</div>
<div class="input-group">
    <label>Email Address</label>
    <input type="email" placeholder="john@example.com" required/>
</div>
<div class="input-group">
<label>Loan Amount ($)</label>
<input type="number" placeholder="50,000" required/>
</div>
<div className="input-group">
<label for="tenure">Loan Tenure</label>
<select name="" id="tenure" required>
<option value="">select tenure</option>
<option value="1">1 Year</option>
<option value="2">2 Years</option>
<option value="3">3 Years</option>
<option value="4">4 Years</option>
<option value="5">5 Years</option>
</select>
</div>
<div className="input-group">
<label for="purpose">Purpose of Loan</label>
<textarea name="" id="purpose" placeholder="e.g., Home renovation, Business expansion, Education....."></textarea>
</div>
<button type="submit" class="submit-button">Submit Application</button>
    </div>
    );
}
export default Apply;