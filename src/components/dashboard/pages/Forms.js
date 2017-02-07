import React from 'react';
import Images from '../../../assets';

export default class FormsPage extends React.Component {

  initDatetimepickers() {
    const widgetIcons = {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down",
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-screenshot',
      clear: 'fa fa-trash',
      close: 'fa fa-remove',
      inline: true
    };
    
    const $ = window.$;
    $('.datetimepicker').datetimepicker({
      icons: widgetIcons
    });

    $('.datepicker').datetimepicker({
      format: 'MM/DD/YYYY',
      icons: widgetIcons
    });
    
    $('.timepicker').datetimepicker({
      format: 'h:mm A', // or use 'H:mm', for 24hours timepicker (no AM/PM toggle shown)
      icons: widgetIcons
    });
  }

  initSliders() {
    window.$('#sliderRegular').noUiSlider({
        start: 40,
        connect: "lower",
        range: {
            min: 0,
            max: 100
        }
    });

    window.$('#sliderDouble').noUiSlider({
        start: [20, 60] ,
        connect: true,
        range: {
            min: 0,
            max: 100
        }
    });
  }

  componentDidMount() {
    this.initSliders()
    this.initDatetimepickers();
    window.md.initMaterialWizardDemo();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form method action="validation.html" id="RegisterValidation">
                <div data-background-color="rose" className="card-header card-header-icon">
                  <i className="material-icons">mail_outline</i>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Register Forms</h4>
                  <div className="form-group label-floating">
                    <label className="control-label">
                      Email Address <small>*</small>
                    </label>
                    <input type="email" required="true" name="email" className="form-control" />
                  </div>
                  <div className="form-group label-floating">
                    <label className="control-label">
                      Password <small>*</small>
                    </label>
                    <input type="password" required="true" id="registerPassword" name="password" className="form-control" />
                  </div>
                  <div className="form-group label-floating">
                    <label className="control-label">
                      Confirm Password <small>*</small>
                    </label>
                    <input type="password" required="true" id="registerPasswordConfirmation" name="password_confirmation" className="form-control" />
                  </div>
                  <div className="category form-category">
                    <small>*</small> Required fields</div>
                  <div className="form-footer text-right">
                    <div className="checkbox pull-left">
                      <label>
                        <input type="checkbox" name="optionsCheckboxes" /> Subscribe to newsletter
                      </label>
                    </div>
                    <button className="btn btn-rose btn-fill" type="submit">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div data-background-color="rose" className="card-header card-header-icon">
                <i className="material-icons">contacts</i>
              </div>
              <div className="card-content">
                <h4 className="card-title">Horizontal Form</h4>
                <form className="form-horizontal">
                  <div className="row">
                    <label className="col-md-3 label-on-left">Email</label>
                    <div className="col-md-9">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label" />
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-3 label-on-left">Password</label>
                    <div className="col-md-9">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label" />
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-3" />
                    <div className="col-md-9">
                      <div className="checkbox form-horizontal-checkbox">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" /> Remember Me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-3" />
                    <div className="col-md-9">
                      <div className="form-group form-button">
                        <button className="btn btn-fill btn-rose" type="submit">Sign in</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <form className="form-horizontal" action="../../../index.html" method="get">
                <div data-background-color="rose" className="card-header card-header-text">
                  <h4 className="card-title">Form Elements</h4>
                </div>
                <div className="card-content">
                  <div className="row">
                    <label className="col-sm-2 label-on-left">With help</label>
                    <div className="col-sm-10">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label" />
                        <input type="text" defaultValue className="form-control" />
                        <span className="help-block">A block of help text that breaks onto a new line.</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Password</label>
                    <div className="col-sm-10">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label" />
                        <input type="password" defaultValue className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Placeholder</label>
                    <div className="col-sm-10">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label" />
                        <input type="text" placeholder="placeholder" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Disabled</label>
                    <div className="col-sm-10">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label" />
                        <input type="text" className="form-control" disabled placeholder="Disabled input here..." />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Static control</label>
                    <div className="col-sm-10">
                      <div className="form-group">
                        <p className="form-control-static">hello@creative-tim.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Checkboxes and radios</label>
                    <div className="col-sm-10 checkbox-radios">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" /> First Checkbox
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" /> Second Checkbox
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" defaultChecked="true" name="optionsRadios" /> First Radio
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" /> Second Radio
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Inline checkboxes</label>
                    <div className="col-sm-10">
                      <div className="checkbox checkbox-inline">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" />a
                        </label>
                      </div>
                      <div className="checkbox checkbox-inline">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" />b
                        </label>
                      </div>
                      <div className="checkbox checkbox-inline">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" />c
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <form className="form-horizontal" action="../../../index.html" method="get">
                <div data-background-color="rose" className="card-header card-header-text">
                  <h4 className="card-title">Input Variants</h4>
                </div>
                <div className="card-content">
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Custom Checkboxes &amp; radios</label>
                    <div className="col-sm-4 col-sm-offset-1 checkbox-radios">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="optionsCheckboxes" /> Unchecked
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" defaultChecked name="optionsCheckboxes" /> Checked
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" disabled name="optionsCheckboxes" /> Disabled Unchecked
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" disabled defaultChecked name="optionsCheckboxes" /> Disabled Checked
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-5 checkbox-radios">
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" /> Radio is off
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" defaultChecked="true" name="optionsRadios" /> Radio is on
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" disabled name="optionsRadiosDisabled" /> Disabled Radio is off
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" disabled defaultChecked="true" name="optionsRadiosDisabled" /> Disabled Radio is on
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Input with success</label>
                    <div className="col-sm-10">
                      <div className="form-group label-floating is-empty has-success">
                        <label className="control-label" />
                        <input type="text" defaultValue="Success" className="form-control" />
                        <span className="material-icons form-control-feedback">done</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Input with error</label>
                    <div className="col-sm-10">
                      <div className="form-group label-floating is-empty has-error">
                        <label className="control-label" />
                        <input type="text" defaultValue="Error Input" className="form-control" />
                        <span className="material-icons form-control-feedback">clear</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 label-on-left">Column sizing</label>
                    <div className="col-sm-10">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group label-floating is-empty">
                            <label className="control-label" />
                            <input type="text" placeholder=".col-md-3" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group label-floating is-empty">
                            <label className="control-label" />
                            <input type="text" placeholder=".col-md-4" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="form-group label-floating is-empty">
                            <label className="control-label" />
                            <input type="text" placeholder=".col-md-5" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div data-background-color="rose" className="card-header card-header-icon">
                <i className="material-icons">today</i>
              </div>
              <div className="card-content">
                <h4 className="card-title">Datetime Picker</h4>
                <div className="form-group">
                  <label className="label-control">Datetime Picker</label>
                  <input type="text" defaultValue="10/05/2016" className="form-control datetimepicker" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div data-background-color="rose" className="card-header card-header-icon">
                <i className="material-icons">library_books</i>
              </div>
              <div className="card-content">
                <h4 className="card-title">Datetime Picker</h4>
                <div className="form-group">
                  <label className="label-control">Date Picker</label>
                  <input type="text" defaultValue="10/10/2016" className="form-control datepicker" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div data-background-color="rose" className="card-header card-header-icon">
                <i className="material-icons">av_timer</i>
              </div>
              <div className="card-content">
                <h4 className="card-title">Datetime Picker</h4>
                <div className="form-group">
                  <label className="label-control">Time Picker</label>
                  <input type="text" defaultValue="14:00" className="form-control timepicker" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-content">
                <br />
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <legend>Switches</legend>
                    <div className="togglebutton">
                      <label>
                        <input type="checkbox" defaultChecked /> Toggle is on
                      </label>
                    </div>
                    <div className="togglebutton">
                      <label>
                        <input type="checkbox" /> Toggle is off
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <legend>Customisable Select</legend>
                    <div className="row">
                      <div className="col-lg-5 col-md-6 col-sm-3">
                        <select data-size={7} title="Single Select" data-style="btn btn-primary btn-round" className="selectpicker">
                          <option disabled>Choose city</option>
                          <option value={2}>Foobar</option>
                          <option value={3}>Is great</option>
                        </select>
                      </div>
                      <div className="col-lg-5 col-md-6 col-sm-3">
                        <select data-size={7} title="Choose City" multiple data-style="select-with-transition" className="selectpicker">
                          <option disabled> Choose city</option>
                          <option value={2}>Paris </option>
                          <option value={3}>Bucharest</option>
                          <option value={4}>Rome</option>
                          <option value={5}>New York</option>
                          <option value={6}>Miami </option>
                          <option value={7}>Piatra Neamt</option>
                          <option value={8}>Paris </option>
                          <option value={9}>Bucharest</option>
                          <option value={10}>Rome</option>
                          <option value={11}>New York</option>
                          <option value={12}>Miami </option>
                          <option value={13}>Piatra Neamt</option>
                          <option value={14}>Paris </option>
                          <option value={15}>Bucharest</option>
                          <option value={16}>Rome</option>
                          <option value={17}>New York</option>
                          <option value={18}>Miami </option>
                          <option value={19}>Piatra Neamt</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <legend>Tags</legend>
                    <input type="text" data-color="rose" data-role="tagsinput" className="tagsinput" defaultValue="Amsterdam,Washington,Sydney,Beijing" />
                    {/* You can change data-color="rose" with one of our colors primary | warning | info | danger | success */}
                  </div>
                  <div className="col-md-6">
                    <legend>Dropdown &amp; Dropup</legend>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-3">
                        <div className="dropdown">
                          <button data-toggle="dropdown" className="dropdown-toggle btn btn-primary btn-round btn-block" href="#pablo">Dropdown
                            <b className="caret" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-left">
                            <li className="dropdown-header">Dropdown header</li>
                            <li>
                              <a href="extended.html#pablo">Action</a>
                            </li>
                            <li>
                              <a href="extended.html#pablo">Another action</a>
                            </li>
                            <li>
                              <a href="extended.html#pablo">Something else here</a>
                            </li>
                            <li className="divider" />
                            <li>
                              <a href="extended.html#pablo">Separated link</a>
                            </li>
                            <li className="divider" />
                            <li>
                              <a href="extended.html#pablo">One more separated link</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-3">
                        <div className="dropup">
                          <button data-toggle="dropdown" className="dropdown-toggle btn btn-primary btn-round btn-block" href="#pablo">Dropup
                            <b className="caret" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-left">
                            <li className="dropdown-header">Dropdown header</li>
                            <li>
                              <a href="extended.html#pablo">Action</a>
                            </li>
                            <li>
                              <a href="extended.html#pablo">Another action</a>
                            </li>
                            <li>
                              <a href="extended.html#pablo">Something else here</a>
                            </li>
                            <li className="divider" />
                            <li>
                              <a href="extended.html#pablo">Separated link</a>
                            </li>
                            <li className="divider" />
                            <li>
                              <a href="extended.html#pablo">One more separated link</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <legend>Progress Bars</legend>
                    <div className="progress progress-line-primary">
                      <div style={{width: '30%'}} aria-valuemax={100} aria-valuemin={0} aria-valuenow={60} role="progressbar" className="progress-bar">
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <div className="progress progress-line-info">
                      <div style={{width: '60%'}} aria-valuemax={100} aria-valuemin={0} aria-valuenow={60} role="progressbar" className="progress-bar progress-bar-info">
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <div className="progress progress-line-danger">
                      <div style={{width: '35%'}} className="progress-bar progress-bar-success">
                        <span className="sr-only">35% Complete (success)</span>
                      </div>
                      <div style={{width: '20%'}} className="progress-bar progress-bar-warning">
                        <span className="sr-only">20% Complete (warning)</span>
                      </div>
                      <div style={{width: '10%'}} className="progress-bar progress-bar-danger">
                        <span className="sr-only">10% Complete (danger)</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <legend>Sliders</legend>
                    <div className="slider" id="sliderRegular" />
                    <div className="slider slider-info" id="sliderDouble" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <legend>Regular Image</legend>
                    <div data-provides="fileinput" className="fileinput fileinput-new text-center">
                      <div className="fileinput-new thumbnail">
                        <img role="presentation" src={Images.placeholder} />
                      </div>
                      <div className="fileinput-preview fileinput-exists thumbnail" />
                      <div>
                        <span className="btn btn-rose btn-round btn-file">
                          <span className="fileinput-new">Select image</span>
                          <span className="fileinput-exists">Change</span>
                          <input type="file" name="..." />
                        </span>
                        <a data-dismiss="fileinput" className="btn btn-danger btn-round fileinput-exists" href="extended.html#pablo"><i className="fa fa-times" /> Remove</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <legend>Avatar</legend>
                    <div data-provides="fileinput" className="fileinput fileinput-new text-center">
                      <div className="fileinput-new thumbnail img-circle">
                        <img role="presentation" src={Images.placeholderSquare} />
                      </div>
                      <div className="fileinput-preview fileinput-exists thumbnail img-circle" />
                      <div>
                        <span className="btn btn-round btn-rose btn-file">
                          <span className="fileinput-new">Add Photo</span>
                          <span className="fileinput-exists">Change</span>
                          <input type="file" name="..." />
                        </span>
                        <br />
                        <a data-dismiss="fileinput" className="btn btn-danger btn-round fileinput-exists" href="extended.html#pablo"><i className="fa fa-times" /> Remove</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card */}
          </div>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          {/*      Wizard container        */}
          <div className="wizard-container">
            <div id="wizardProfile" data-color="rose" className="card wizard-card">
              <form method action="wizard.html">
                {/*        You can switch " data-color="purple" "  with one of the next bright colors: "green", "orange", "red", "blue"       */}
                <div className="wizard-header">
                  <h3 className="wizard-title">
                    Build Your Profile
                  </h3>
                  <h5>This information will let us know more about you.</h5>
                </div>
                <div className="wizard-navigation">
                  <ul>
                    <li>
                      <a data-toggle="tab" href="wizard.html#about">About</a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="wizard.html#account">Account</a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="wizard.html#address">Address</a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div id="about" className="tab-pane">
                    <div className="row">
                      <h4 className="info-text"> Let's start with the basic information (with validation)</h4>
                      <div className="col-sm-4 col-sm-offset-1">
                        <div className="picture-container">
                          <div className="picture">
                            <img title id="wizardPicturePreview" className="picture-src" src={Images.defaultAvatar} role="presentation" />
                            <input type="file" id="wizard-picture" />
                          </div>
                          <h6>Choose Picture</h6>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="material-icons">face</i>
                          </span>
                          <div className="form-group label-floating">
                            <label className="control-label">First Name <small>(required)</small>
                            </label>
                            <input type="text" className="form-control" name="firstname" />
                          </div>
                        </div>
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="material-icons">record_voice_over</i>
                          </span>
                          <div className="form-group label-floating">
                            <label className="control-label">Last Name <small>(required)</small>
                            </label>
                            <input type="text" className="form-control" name="lastname" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-10 col-lg-offset-1">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="material-icons">email</i>
                          </span>
                          <div className="form-group label-floating">
                            <label className="control-label">Email <small>(required)</small>
                            </label>
                            <input type="email" className="form-control" name="email" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="account" className="tab-pane">
                    <h4 className="info-text"> What are you doing? (checkboxes) </h4>
                    <div className="row">
                      <div className="col-lg-10 col-lg-offset-1">
                        <div className="col-sm-4">
                          <div data-toggle="wizard-checkbox" className="choice">
                            <input type="checkbox" defaultValue="Design" name="jobb" />
                            <div className="icon">
                              <i className="fa fa-pencil" />
                            </div>
                            <h6>Design</h6>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div data-toggle="wizard-checkbox" className="choice">
                            <input type="checkbox" defaultValue="Code" name="jobb" />
                            <div className="icon">
                              <i className="fa fa-terminal" />
                            </div>
                            <h6>Code</h6>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div data-toggle="wizard-checkbox" className="choice">
                            <input type="checkbox" defaultValue="Develop" name="jobb" />
                            <div className="icon">
                              <i className="fa fa-laptop" />
                            </div>
                            <h6>Develop</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="address" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-12">
                        <h4 className="info-text"> Are you living in a nice area? </h4>
                      </div>
                      <div className="col-sm-7 col-sm-offset-1">
                        <div className="form-group label-floating">
                          <label className="control-label">Street Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group label-floating">
                          <label className="control-label">Street No.</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-5 col-sm-offset-1">
                        <div className="form-group label-floating">
                          <label className="control-label">City</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="form-group label-floating">
                          <label className="control-label">Country</label>
                          <select className="form-control" name="country">
                            <option disabled />
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa"> American Samoa </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antarctica"> Antarctica </option>
                            <option value="...">...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wizard-footer">
                  <div className="pull-right">
                    <input type="button" defaultValue="Next" name="next" className="btn btn-next btn-fill btn-rose btn-wd" />
                    <input type="button" defaultValue="Finish" name="finish" className="btn btn-finish btn-fill btn-rose btn-wd" />
                  </div>
                  <div className="pull-left">
                    <input type="button" defaultValue="Previous" name="previous" className="btn btn-previous btn-fill btn-default btn-wd" />
                  </div>
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </div>
          {/* wizard container */}
        </div>
      </div>
    );
  }
}
