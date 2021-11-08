class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}

class Main {
  public static void main(String[] args) {
    System.out.println(12 / 3);

    System.out.println(3 * 6);
    System.out.println( 8 % 3);
  }
}



class Main {
  public static void main(String[] args) {
    System.out.println("こんにちは" + "世界");

    System.out.println("38" + "19");

    System.out.println(38 + 19);

  }
}

 public static void main(String[] args)
    int number;

    number = 3;

    System.out.println(number);

    String name;
    name = "wanko";
  }
}

class Main {
  public static void main(String[] args) {
    int number1 = 3;

    // int型の変数number2を定義し、7を代入してください
    int number2 = 7;
    System.out.println(number1 * number2);

    String text = "プログラミングを勉強しよう";

    System.out.println("Progateで" + text);



    class Main {
    public static void main(String[] args) {
    int number = 11;
    String text = "Ruby";
    System.out.println(number);
    System.out.println(text);
    number = 9;
    System.out.println(number);
    text = "java";

    System.out.println(text);

    class Main {
  public static void main(String[] args) {
    int number = 3;
    System.out.println(number);

    number = number + 3;

    System.out.println(number);

  }
}

class Main {
  public static void main(String[] args) {
    int number = 8;

    number *= 7
    System.out.println(number);

    number ++;

    System.out.println(number);


    class Main {
  public static void main(String[] args) {
    int length = 6;
    int height = 8;

    int rectangleArea = length * height;
    System.out.println(rectangleArea);

    int triangleArea = length * height / 2;

    System.out.println(triangleArea);

  }
}

class Main {
  public static void main(String[] args) {

    double number1 = 8.5;

    double number2 = 3.4;
        System.out.println(number1 + number2);
        System.out.println(number1 - number2);

  }


  class Main {
  public static void main(String[] args) {
    int month = 12;
    int date = 31;

    System.out.println(month + "月" + date + "日");

    System.out.println(7 / 2);

    System.out.println(7.0 / 2.0);

    System.out.println(7 / 2.0);

  }


  class Main {
  public static void main(String[] args) {
    int number1 = 7;
    int number2 = 2;
    System.out.println(number1 / number2);

    System.out.println((double)number1 / number2);

  }
}

class Main {
  public static void main(String[] args) {
    String name = "武藤敬司";
        int age = 33;

    double height = 1.2;
    double weight = 20.9;

    double bmi = weight / height / height;

    System.out.println("名前は" + name + "です");
    System.out.println("年齢は" + age + "歳です");
    System.out.println("体重は" +  weight + "kgです");
    System.out.println("身長は" + height + "mです");
    System.out.println("BMIは" + bmi +"です");
    }
  }

  class Main {
  public static void main(String[] args) {
    System.out.println(true);

    System.out.println(false);

    System.out.println(12/4 == 3);

    System.out.println(12/4 != 3);

    boolean bool = 3 * 9 == 27;
    System.out.println(bool);

  }
}

class Main {
  public static void main(String[] args) {
    System.out.println(4 + 2 < 6);

    System.out.println(4 + 2 <= 6);

  }
}

class Main {
  public static void main(String[] args) {
    if (true) {
      System.out.println("条件式がtrueのため、出力されます");
    }

    if (false) {
      System.out.println("条件式がfalseのため、出力されません");
    }

    int x = 5;
    if( x > 2){
      System.out.println("xは2より大きい");
    }

    if(x > 8){
      System.out.println("xは8より大きい");
    }

  }
}

class Main {
  public static void main(String[] args) {
    int number = 12;

    if (number < 10) {
      System.out.println("10より小さい");
    }else if(20 > number){
      System.out.println("10以上、20より小さい");
    }else{
      System.out.println("20以上");
    }

  }
}

class Main {
  public static void main(String[] args) {
    int number = 12;

    switch(number % 3) {
    case 0:
      System.out.println("3で割り切れます");
      break;
    case 1:
     System.out.println("3で割ると1余ります");
     break;
    case 2:
      System.out.println("3で割ると2余ります");
    break;
    }
  }
}



class Main {
  public static void main(String[] args) {
    int number = 12;

    // switch文を用いて、numberを3で割った余りで条件分岐をしてください
    switch(number % 3){
    case 0:
      System.out.println("3で割り切れます");
      break;
    case 1:
     System.out.println("3で割ると1余ります");
     break;
    case 2:
      System.out.println("3で割ると2余ります");
      break;

    }
  }
}