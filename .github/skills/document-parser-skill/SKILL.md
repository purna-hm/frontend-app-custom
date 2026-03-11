---
name: Document Parser Skill
description: Instructions and scripts for parsing document formats (CSV, PDF, Excel) commonly downloaded by the Jira Agent.
version: "1.0"
---

# Document Parser Skill

## Role
You are utilizing the Document Parser Skill. Your objective is to extract structured, readable text or data representations from binary or formatted documents (like CSVs, PDFs, or Excel files) that have been attached to Jira tickets or provided by the user.

## Context
Orchestrators or users will frequently ask you to read and map data from attachments, usually located in `docs/{ticket_no}/jira-docs/`. Standard file reading tools (`cat` or `IDE read`) do not work efficiently or correctly on raw binary formats.

When asked to read an attachment, you **must use** one of the strategies defined below based on the file type.

## Supported Document Types

### 1. CSV Files (`.csv`)
CSVs are raw text and can often be read directly by simple tools, but formatting them into tables makes them easier to digest for complex mappings.

**Execution Strategy (Python):**
To reliably parse a CSV and dump it to a readable Markdown table:
```python
import csv

def parse_csv_to_md(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        data = list(reader)
        
    if not data: return "Empty CSV"
    
    headers = data[0]
    md = f"| {' | '.join(headers)} |\n| {' | '.join(['---'] * len(headers))} |\n"
    
    for row in data[1:]:
        # Handle cases where rows might be shorter than headers
        padded_row = row + [''] * (len(headers) - len(row))
        md += f"| {' | '.join(padded_row)} |\n"
        
    print(md)

parse_csv_to_md('docs/{ticket_no}/jira-docs/{filename}.csv')
```

**Execution Strategy (Bash/Shell):**
For a quick look at headers: `head -n 5 docs/{ticket_no}/jira-docs/{filename}.csv`

### 2. PDF Files (`.pdf`)
PDFs are binary files. You cannot read them natively. You MUST write a script to extract the text.

**Execution Strategy (Python with `pypdf`):**
1. Create a temporary virtual environment if dependencies are needed, or install globally if permitted: `pip install pypdf`
2. Run the extraction script:
```python
from pypdf import PdfReader

def extract_pdf_text(file_path):
    try:
        reader = PdfReader(file_path)
        text = ""
        for i, page in enumerate(reader.pages):
            text += f"\n--- Page {i+1} ---\n"
            text += page.extract_text()
        print(text)
    except Exception as e:
        print(f"Error reading PDF: {e}")

extract_pdf_text('docs/{ticket_no}/jira-docs/{filename}.pdf')
```

### 3. Excel Files (`.xlsx`, `.xls`)
Do NOT try to `cat` or `read` an Excel file.

**Execution Strategy (Python with `pandas`):**
1. Install pandas: `pip install pandas openpyxl`
2. Dump the sheets to CSV or Markdown:
```python
import pandas as pd

def read_excel_to_md(file_path):
    try:
        # Read all sheets
        xl = pd.ExcelFile(file_path)
        for sheet_name in xl.sheet_names:
            print(f"\n### Sheet: {sheet_name}\n")
            df = pd.read_excel(file_path, sheet_name=sheet_name)
            # Print as markdown table, handling NaNs
            print(df.fillna('').to_markdown(index=False))
    except Exception as e:
        print(f"Error reading Excel: {e}")

read_excel_to_md('docs/{ticket_no}/jira-docs/{filename}.xlsx')
```

## Instructions for the Agent
1. **Identify the File Type**: Look at the file extension of the target document.
2. **Select the Strategy**: Choose the corresponding Python script above.
3. **Execute**: Create a temporary python script (e.g., `parse_doc.py`) with the chosen strategy, replacing the file_path with the actual absolute or relative path to the document.
4. **Run**: Execute the script using your bash tool (`python parse_doc.py`) and capture the output.
5. **Analyze**: Use the formatted text/markdown output from your script to perform the requested mapping, design, or analysis task requested by the Orchestrator or User.
6. **Cleanup**: Delete the temporary script if no longer needed.