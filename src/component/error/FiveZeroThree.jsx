import React from 'react'

const FiveZeroThree = () => {
  return (
    <>
      <div className="hk-wrapper hk-pg-auth" data-footer="simple">
		{/* <!-- Top Navbar --> */}
		<nav className="hk-navbar navbar navbar-expand-xl navbar-light fixed-top">
			<div className="container-xxl">
				{/* <!-- Start Nav --> */}
				<div className="nav-start-wrap">
					<a className="navbar-brand" href="index.html">
						<img className="brand-img d-inline-block" src="/img/logo-light.png" alt="brand" />
					</a>
				</div>
				{/* <!-- /Start Nav --> */}

				{/* <!-- End Nav --> */}
				<div className="nav-end-wrap">
					<ul className="navbar-nav flex-row">
						<li className="nav-item nav-link py-0">
						<button className="btn btn-sm btn-outline-light"><span><span className="icon"><span className="feather-icon"><i data-feather="help-circle"></i></span></span><span>Get Help</span></span></button>
						</li>
					</ul>	
				</div>
				{/* <!-- /End Nav --> */}
			</div>
		
		</nav>
		{/* <!-- /Top Navbar --> */}

		{/* <!-- Main Content --> */}
		<div className="hk-pg-wrapper">
			{/* <!-- Page Body --> */}
			<div className="hk-pg-body">
				{/* <!-- Container --> */}
				<div className="container-xxl">
					{/* <!-- Row --> */}
					<div className="row">
						<div className="col-xl-7 col-lg-6 d-lg-block d-none">
							<div className="auth-content py-md-0 py-8">
								<div className="row">
									<div className="col-xl-12 text-center">
										<img src="/img/macaroni-delete-confirmaton.png"  className="img-fluid w-sm-70 w-50" alt="login"/>
										{/* <p className="p-xs mt-5 text-light">Illustrations powered by <a href="https://icons8.com/ouch/"  className="text-light"><u>Icons8</u></a></p> */}
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6 col-md-7 col-sm-10">
							<div className="auth-content py-md-0 py-8">
								<div className="w-100">
									<div className="row">
										<div className="col-xxl-9 col-xl-8 col-lg-11">
											<h1 className="display-4 fw-bold mb-2">503</h1>
											<p>Server is temporarily unable to handle the request. This may be due to the server being overloaded or down for maintenance.</p>
											<a href="index.html" className="btn btn-primary mt-4">Return to App</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Row --> */}
				</div>
				{/* <!-- /Container --> */}
			</div>
			{/* <!-- /Page Body -->

			<!-- Page Footer --> */}
			<div className="hk-footer">
				<footer className="container-xxl footer">
					<div className="row">
						<div className="col-xl-8">
							<p className="footer-text"><span className="copy-text">Jampack © 2022 All rights reserved.</span> <a href="#" className="" target="_blank">Privacy Policy</a><span className="footer-link-sep">|</span><a href="#" className="" target="_blank">T&C</a><span className="footer-link-sep">|</span><a href="#" className="" target="_blank">System Status</a></p>
						</div>
						<div className="col-xl-4">
							<a href="#" className="footer-extr-link link-default"><span className="feather-icon"><i data-feather="external-link"></i></span><u>Send feedback to our help forum</u></a>
						</div>
					</div>
				</footer>
			</div>
			{/* <!-- / Page Footer --> */}

		</div>
		{/* <!-- /Main Content --> */}
	</div>
    </>
  )
}

export default FiveZeroThree
