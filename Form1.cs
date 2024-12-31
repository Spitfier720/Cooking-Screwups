namespace Cooking_Screwups
{
    public partial class Form1 : Form
    {
        private Label label;
        private DataGridView screwupLog;

        public Form1()
        {
            InitializeComponent();
            InitializeLabel();
            InitializeDataGridView();

            this.Text = "Cooking Screwups";
            this.Resize += new EventHandler(Form1_Resize);
        }

        private void InitializeLabel()
        {
            label = new Label();
            
            label.Text = "Cooking Screwups";
            label.AutoSize = true;
            label.Font = new Font("Verdana", 24, FontStyle.Bold);

            this.Controls.Add(label);
            CenterLabel();
        }

        private void InitializeDataGridView()
        {
            screwupLog = new DataGridView();
            
            screwupLog.ColumnHeadersVisible = true;
            
            // Managing user permissions
            screwupLog.ReadOnly = true;
            screwupLog.AllowUserToAddRows = false;
            screwupLog.AllowUserToResizeColumns = false;
            screwupLog.AllowUserToResizeRows = false;
            screwupLog.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.DisableResizing;
            screwupLog.RowHeadersWidthSizeMode = DataGridViewRowHeadersWidthSizeMode.DisableResizing;

            // Column headers, and spacing the columns to fit the data
            // As far as I know this is the only way that works
            DataGridViewTextBoxColumn dateColumn = new DataGridViewTextBoxColumn();
            dateColumn.HeaderText = "Date";
            dateColumn.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCellsExceptHeader;

            DataGridViewTextBoxColumn dishColumn = new DataGridViewTextBoxColumn();
            dishColumn.HeaderText = "Dish Cooked";
            dishColumn.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCellsExceptHeader;

            DataGridViewTextBoxColumn screwupColumn = new DataGridViewTextBoxColumn();
            screwupColumn.HeaderText = "Screwups Made";
            screwupColumn.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCellsExceptHeader;

            DataGridViewTextBoxColumn notesColumn = new DataGridViewTextBoxColumn();
            notesColumn.HeaderText = "Additional Notes";
            notesColumn.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCellsExceptHeader;

            screwupLog.Columns.AddRange(new DataGridViewColumn[] { dateColumn, dishColumn, screwupColumn, notesColumn });
            
            // Adding data to the table
            // Later on this will be replaced with data taken from a JSON file            
            screwupLog.Rows.Add(new String[] {"December 11, 2024", "Pasta", "- Put the pork in too early", "ngl i was actually tired as hell idk how i lived through that day"});

            // Calculating the width of the table to fit the data
            // Basically the table itself can cut off, even though the data inside the table is able to be displayed
            int width = 0;

            foreach(DataGridViewColumn column in screwupLog.Columns)
            {
                width += column.GetPreferredWidth(DataGridViewAutoSizeColumnMode.AllCellsExceptHeader, true);
            }

            width += screwupLog.RowHeadersWidth;

            screwupLog.Size = new Size (
                width,
                screwupLog.PreferredSize.Height
            );
            
            // Making the table look nice
            screwupLog.BackgroundColor = System.Drawing.SystemColors.Control; // remove unused gray area in the table
            screwupLog.BorderStyle = BorderStyle.None; // remove the border around the table

            this.Controls.Add(screwupLog);
            CenterDataGridView();
        }

        private void Form1_Resize(object sender, EventArgs e)
        {
            CenterLabel();
            CenterDataGridView();
        }

        private void CenterLabel()
        {
            if (label != null)
            {
                label.Location = new Point((this.ClientSize.Width - label.Width) / 2, 50);
            }
        }

        private void CenterDataGridView()
        {
            if (screwupLog != null)
            {
                screwupLog.Location = new Point((this.ClientSize.Width - screwupLog.Width) / 2, 200);
            }
        }
    }
}