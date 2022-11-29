import Head from 'next/head'
import Script from 'next/script'
import { symbolName } from 'typescript';
import styles from '../styles/Home.module.css'

export default function DropDownExample() {
    return(<div className={styles.container}>
        <select id="optionDropDown">
        </select>
        /*when using src. if calling from pages/moduloAlgunmodulo, use ../../aScript.js*/
        <Script src = "dropdown.js" />
        <footer className={styles.footer}>

        </footer>
      </div>
    );
  }