import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'formData.xlsx');

export async function POST(request) {
  try {
   
    const formData = await request.json();
 
    let wb;
    if (fs.existsSync(filePath)) {
      
      wb = XLSX.readFile(filePath);
    } else {
      
      wb = XLSX.utils.book_new();
      wb.Props = {
        Title: 'Form Data',
        Subject: 'Form Data',
        Author: 'CheckMed',
      };
      wb.SheetNames.push('Form Data');
    }

    
    let ws = wb.Sheets['Form Data'];
    if (!ws) {
      
      ws = XLSX.utils.aoa_to_sheet([['Name', 'Mobile', 'Email', 'Company']]);
      wb.Sheets['Form Data'] = ws;
    }

    
    const newRow = [formData.name, formData.mobile, formData.email, formData.company];
    XLSX.utils.sheet_add_aoa(ws, [newRow], { origin: -1 });

    
    XLSX.writeFile(wb, filePath);

    
    return NextResponse.json({ message: 'Form data saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json({ message: 'Error saving form data. Please try again later.' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ message: 'Excel file not found!' }, { status: 404 });
    }

    const workbook = XLSX.readFile(filePath);

    const sheetName = workbook.SheetNames[0]; 
    const worksheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(worksheet);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return NextResponse.json({ message: 'Error reading Excel file.' }, { status: 500 });
  }
}
