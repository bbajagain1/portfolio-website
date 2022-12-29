import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="full-height px-lg-5">
    <div class="container">

        <div class="row justify-content-center text-center">
            <div class="col-lg-8 pb-4" data-aos="fade-up">
                <h6 class="text-brand">CONTACT</h6>
                <h1>Interested in working together? Let's talk
                </h1>
            </div>

            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                <form action="#" class="row g-lg-3 gy-3">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" placeholder="Enter your name" />
                    </div>
                    <div class="form-group col-md-6">
                        <input type="email" class="form-control" placeholder="Enter your email" />
                    </div>
                    <div class="form-group col-12">
                        <input type="text" class="form-control" placeholder="Enter subject" />
                    </div>
                    <div class="form-group col-12">
                        <textarea name="" rows="4" class="form-control" placeholder="Enter your message"></textarea>
                    </div>
                    <div class="form-group col-12 d-grid">
                        <button type="submit" class="btn btn-brand">Contact me</button>
                    </div>
                </form>
            </div>
        </div>


    </div>
</section>
  )
}

export default Contact