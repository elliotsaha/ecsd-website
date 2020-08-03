import React, { useState, useRef, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Element } from 'react-scroll';
import { useIntersection } from 'react-use';
import { gsap } from 'gsap';
import il8 from '../../img/illustrations/il8.png'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'auto',
      backgroundColor: "#333645",
      position: "relative",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#242734",
      },
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
    button: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bold',
      color: 'white',
      padding: '0.7rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      display: 'block',
      textTransform: 'none',
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      '&:hover': {
        background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 65%)",
      },
    },
    textField: {
      paddingBottom: '1.5rem',
      display: 'block',
      '& label.Mui-focused': {
        color: '#7A8DFF',
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 'bold',
      },
      '& label': {
        color: '#66AAEE',
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 'bold',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#66AAEE',
      },
      '& .MuiOutlinedInput-root': {
        width: '29rem',
        [theme.breakpoints.down(600)]: {
          width: '20rem',
        },
        '& fieldset': {
          borderColor: '#66AAEE',
          borderWidth: '0.2rem',
        },
        '&:hover fieldset': {
          borderColor: '#66AAEE',
          borderWidth: '0.2rem',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#7A8DFF',
          borderWidth: '0.2rem',
        },
      },
    },
    helperText: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bold',
    },
    formContainer: {
      margin: 'auto',
      padding: '3rem',
      [theme.breakpoints.down(1100)]: {
        padding: 0,
        margin: 'auto',
        gridColumnStart: '1',
        gridColumnEnd: '3',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
      },
    },
    title: {
      gridColumnStart: '1',
      gridColumnEnd: '3',
      textAlign: 'center',
      paddingTop: '2rem',
      lineHeight: "9rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "6rem",
    },
    image: {
      width: '90%',
      [theme.breakpoints.down(1100)]: {
        display: 'none',
      },
    },
    imageContainer: {
      margin: 'auto',
    },
    bar: {
      marginLeft: "auto",
      marginRight: "auto",
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      marginBottom: "1.5rem",
    },
  }),
);
export default function PanelSeven() {
  const classes = useStyles();

  // States for form fields and error handling
  const [name, setName] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [paragraph, setParagraph] = useState('');
  const [isParagraphError, setIsParagraphError] = useState(false);
  const [paragraphError, setParagraphError] = useState('');

  // Setting the form field to state
  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const onEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const onParagraphChange = (event: any) => {
    setParagraph(event.target.value);
  };

  // On submit function function for error handling
  const onSubmit = (e: any) => {
    setIsEmailError(false);
    setIsNameError(false);
    setIsParagraphError(false);
    if (name === '') {
      e.preventDefault();
      setIsNameError(true);
      setNameError('Required Field');
    }
    // Regex expression to know if email is invalid
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      ) !== true
    ) {
      e.preventDefault();
      setIsEmailError(true);
      setEmailError('Invalid Email');
    }
    if (paragraph === '') {
      e.preventDefault();
      setIsParagraphError(true);
      setParagraphError('Required Field');
    }
  };

  // Defining ref for intersection observer
  const sectionRef6 = useRef(null);

  const intersection = useIntersection(sectionRef6, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  useEffect(() => {
    // Fade in animation when scroll in
    const fadeIn = (element: any) => {
      gsap.to(element, 1, {
        opacity: 1,
        y: -0,
        ease: 'power3.out',
        stagger: {
          amount: 0,
        },
      });
    };

    // Fade out animation when scroll out
    const fadeOut = (element: any) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: -20,
        ease: 'power3.out',
      });
    };
    intersection && intersection.intersectionRatio < 0.3
      ? // Not Reached
        fadeOut('.fadeIn6')
      : fadeIn('.fadeIn6');
  }, [intersection]);

  return (
    // Element that is scrolled to on button press in panel one
    <Element name="Contact">
      {/*Defining Ref for intersection observer*/}
      <div ref={sectionRef6} className={classes.root}>
        <div className={classes.title}>
          <span>
            {/*Title*/}
            <div className="fadeIn6">Contact</div>
            <div className="fadeIn6">
              <div className={classes.bar}/>
            </div>
            
          </span>
        </div>
        <div className={classes.formContainer}>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thankyou"
          >
            <input type="hidden" name="bot-field" /> {/*Hidden Input for bot detection*/}
            <div className="fadeIn6">
              {/*Text field for Name*/}
              <TextField
                InputProps={{
                  style: { fontFamily: 'Gilroy, sans-serif', fontWeight: 'bold', color: 'black' },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={classes.textField}
                name="Name"
                label="Name"
                value={name}
                onChange={onNameChange}
                helperText={nameError}
                error={isNameError}
                variant="outlined"
                color="secondary"
              />
            </div>
            <div className="fadeIn6">
              {/*Text field for Email*/}
              <TextField
                InputProps={{
                  style: { fontFamily: 'Gilroy, sans-serif', fontWeight: 'bold', color: 'black' },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={classes.textField}
                name="Email"
                label="Email"
                value={email}
                onChange={onEmailChange}
                helperText={emailError}
                error={isEmailError}
                variant="outlined"
              />
            </div>
            <div className="fadeIn6">
              {/*Text field for Message*/}
              <TextField
                InputProps={{
                  style: { fontFamily: 'Gilroy, sans-serif', fontWeight: 'bold', color: 'black' },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                multiline
                rows={10}
                className={classes.textField}
                name="Message"
                label="Message"
                value={paragraph}
                onChange={onParagraphChange}
                helperText={paragraphError}
                error={isParagraphError}
                variant="outlined"
              />
            </div>
            <div>
              <div className="fadeIn6">
                {/*Submit Button*/}
                <Button type="submit" className={classes.button} onClick={onSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className={classes.imageContainer}>
          <div className="fadeIn6">
            <img src={il8} alt="Illustration" className={classes.image} />
          </div>
        </div>
      </div>
    </Element>
  );
}
