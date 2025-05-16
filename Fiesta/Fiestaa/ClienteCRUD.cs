public class ClienteCRUD
{
    // atributos
    private List<ClienteDTO> listaClientes;
    private ClienteDTO cliente;
    private Tela tela;

    public ClienteCRUD()
    {
        this.listaClientes = new List<ClienteDTO>(); // "Banco de dados"
        this.cliente = new ClienteDTO();   // Cliente "da vez""
        //this.cliente = new ClienteDTO(1, "ze", "ze@gmail.com", "999999999");
        this.tela = new Tela();
    }

    public void executarCRUD()
    {
        // 1 - montar a tela do CRUD
        this.montarTelaCliente(31,2);

        //preparar m registro de cliente
        this.cliente = new Cliente();

        /*
            Uma lógica possivel para o CRUD console .NET
            -------------------------------
            1 - montar a tela do CRUD
            2 - perguntar ao usuário a chave do cliente
            3 - buscar pela chave no "banco de dados" (listaClientes)
            4 - se não achou a chave no banco de dados
                4.1 - informar que nao achou
                4.2 - perguntar se deseja cadastrar
                4.3 - se o usuário informar que deseja cadastrar
                    4.3.1 - perguntar os dados restantes ao usuário
                    4.3.2 - perguntar se o usuario confirma o cadastro
                    4.3.3 - se o usuario confirmar
                        4.3.3.1 - informar a inclusão do novo cliente
            5 - se achou a chave  no banco de dados
                5.1 - mostrar os dados na tela
                5.2 - perguntar ao usuario se deseja  voltar, alterar ou excluir
                5.3 - se o usuario informou que deseja alterar
                    5.3.1 - pergunta os novos dados ao usuario
                    5.3.2 - pergunta se o usuario confirma a alteração
                    5.3.3 - se o usuario confirmou a alteração
                        5.3.3.1 - gravar a alteração que dos dados do cliente
                5.4 - se o usuario informou que deseja excluir
                    5.4.1 - pergunta se o usuario confirma a exlcusao
                    5.4.2 - se o usuario confirmou exclusao
                        5.4.2.1 - excluir cliente
        */


    }

    private void montarTelaCliente(int coluna, int linha)
    {

        int coluna2 = coluna+30;

        this.tela.desenharMoldura(coluna, linha, coluna2, linha + 6);

        linha++;
        this.tela.centralizar("Cadastro de Cliente", linha, coluna, coluna2);
        linha++;

        coluna++;
        Console.SetCursorPosition(coluna, linha);
        Console.Write("Código  :");
        linha++;
        Console.SetCursorPosition(coluna, linha);
        Console.Write("Nome    :");
        linha++;
        Console.SetCursorPosition(coluna, linha);
        Console.Write("Email   :");
        linha++;
        Console.SetCursorPosition(coluna, linha);
        Console.Write("Telefone:");

    }
}