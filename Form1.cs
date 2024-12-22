namespace Cooking_Screwups
{
    public partial class Form1 : Form
    {
        private Label label;

        public Form1()
        {
            InitializeComponent();
            InitializeLabel();

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

        private void Form1_Resize(object sender, EventArgs e)
        {
            CenterLabel();
        }

        private void CenterLabel()
        {
            if (label != null)
            {
                label.Location = new Point((this.ClientSize.Width - label.Width) / 2, 50);
            }
        }
    }
}