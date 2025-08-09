public class ClienteDTO
{
    //atributos
    private int codigo;
    private string nome;
    private string email;
    private string telefone;

    //propriedades
    public int Codigo { get => codigo; set => codigo = value; } //get para pegar e set para alterar 
    public string Nome { get => nome; set => nome = value; }
    public string Email { get => email; set => email = value; }
    public string Telefone { get => telefone; set => telefone = value; }
 

    //===metodo construtor sobrecarregado===
    //método construtor para especifico
    public ClienteDTO(int codigo, string nome, string email, string telefone)
    {
        this.codigo = codigo;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    //outro metodo construtor para generico 
    public ClienteDTO(){
        Codigo =0;
        Nome ="";
        Email="";
        Telefone="";

    }
    //============================
}

