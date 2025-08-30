function Contact() {
    return <>

        <main role="main">
            <div class="jumbotron">
                <div class="container">
                    <h1 class="display-5">Contact Us</h1>
                    <p style={{fontSize:21}}>If you have any requirement about Develop website and Site Reliability and Many other things Fill this From Given Below My Team Will Contact You Shortly.</p>
                    <p><a class="btn btn-primary btn-sm" href="#" role="button">Samir &raquo;</a></p>
                </div>
            </div>
        </main>
        <div class="container" style={{marginTop:-30}}>
            <form>
                <div class="form-group">
                    <label>Enter Your Name </label>
                    <input type="name" class="form-control" id="" placeholder="Enter Name" />
                </div>
                <div class="form-group">
                    <label>Enter Your Email Id </label>
                    <input type="email" class="form-control" id=""  placeholder="Enter Email Id" />
                </div>
                <div class="form-group">
                    <label>Enter Your Requirement</label>
                    <textarea class="form-control" id="" rows="3" placeholder="Enter Requirement"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    </>
}
export default Contact;
