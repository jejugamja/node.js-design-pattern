using System;
using System.Linq;

namespace Variance {
    class Program {
        static void Main (string[] args) {
            System.Console.WriteLine (args.Length
                switch {
                    0 => "데이터가 입력되지 않았습니다.",
                    1 => "2개 이상의 값이 입력 되어야 합니다.",
                    _ => GetVarianceOutput (args)
                });
        }

        private static string GetVarianceOutput (string[] args) {
            double[] s = ParseArguments (args);
            double mean = CalculateMean (s);
            double sumOfSquares = SumOfSquares (s, mean);
            double variance = sumOfSquares / (s.Length - 1);
            string output = $"분산 : {variance}";
            return output;
        }

        private static double SumOfSquares (double[] s, double mean) {
            return s.Select (x => x - mean)
                .Select (x => x * x)
                .Sum ();
        }

        private static double CalculateMean (double[] s) => s.Average ();

        private static double[] ParseArguments (string[] args) =>
            args.Select (double.Parse).ToArray ();

    }
}