#Classificador de Faixa Etária
#Descrição: Peça ao usuário que digite sua idade. O programa deve classificar e exibir uma das seguintes mensagens:
#Se a idade for menor que 13: "Criança".
#Se a idade estiver entre 13 e 19: "Adolescente".
#Se a idade for 20 ou mais: "Adulto".


int input("Digite sua idade")

if idade < 13:
    print ("criança")
elif idade <= 19:
    print ("Adolescente")
else:
    print("Adulto")