//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2017.10.03 at 02:27:05 PM EDT 
//


package com.bbn.marti.excheck.checklist;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for checklistColumn complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="checklistColumn">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="columnName" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="columnType" type="{}checklistColumnType"/>
 *         &lt;element name="columnWidth" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "checklistColumn", propOrder = {
    "columnName",
    "columnType",
    "columnWidth",
    "columnBgColor",
    "columnTextColor",
    "columnEditable"
})
public class ChecklistColumn {

    @XmlElement(required = true)
    protected String columnName;
    @XmlElement(required = true)
    @XmlSchemaType(name = "string")
    protected ChecklistColumnType columnType;
    protected int columnWidth;
    protected String columnBgColor = "";
    protected String columnTextColor = "";
    protected boolean columnEditable = false;

    /**
     * Gets the value of the columnName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getColumnName() {
        return columnName;
    }

    /**
     * Sets the value of the columnName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setColumnName(String value) {
        this.columnName = value;
    }

    /**
     * Gets the value of the columnType property.
     * 
     * @return
     *     possible object is
     *     {@link ChecklistColumnType }
     *     
     */
    public ChecklistColumnType getColumnType() {
        return columnType;
    }

    /**
     * Sets the value of the columnType property.
     * 
     * @param value
     *     allowed object is
     *     {@link ChecklistColumnType }
     *     
     */
    public void setColumnType(ChecklistColumnType value) {
        this.columnType = value;
    }

    /**
     * Gets the value of the columnWidth property.
     * 
     */
    public int getColumnWidth() {
        return columnWidth;
    }

    /**
     * Sets the value of the columnWidth property.
     * 
     */
    public void setColumnWidth(int value) {
        this.columnWidth = value;
    }

    /**
     * Gets the value of the columnBgColor property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getColumnBgColor() {
        return columnBgColor;
    }

    /**
     * Sets the value of the columnBgColor property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setColumnBgColor(String value) {
        this.columnBgColor = value;
    }

    /**
     * Gets the value of the columnTextColor property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getColumnTextColor() {
        return columnTextColor;
    }

    /**
     * Sets the value of the columnTextColor property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setColumnTextColor(String value) {
        this.columnTextColor = value;
    }

    /**
     * Gets the value of the columnEditable property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public boolean getColumnEditable() {
        return columnEditable;
    }

    /**
     * Sets the value of the columnTextColor property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setColumnEditable(boolean value) {
        this.columnEditable = value;
    }
}
