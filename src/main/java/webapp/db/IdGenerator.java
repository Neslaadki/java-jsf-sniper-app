package webapp.db;

import javax.persistence.EntityManager;
import java.util.HashSet;
import java.util.List;

public class IdGenerator {

    private static HashSet<Integer> idSet = new HashSet<>();
    private static Integer count = 1;

    public static int generate() {
        try {
            while (idSet.contains(count)) {
                if (count == Integer.MAX_VALUE) {
                    throw new StackOverflowError();
                } else {
                    count++;
                }
            }

            put(count);
            return count;

        } catch (StackOverflowError e) {
            return -1;
        }
    }

    public static void put(Integer id) {
        idSet.add(count);
    }

    public static void setIdSet(List<PointEntity> pointBeansId) {
        clear();
        for (PointEntity pointEntities : pointBeansId) {
            idSet.add(Integer.valueOf(pointEntities.getId()));
        }
    }

    public static void clear() {
        idSet.clear();
        count = 1;
    }

    public static HashSet<Integer> getIdSet() {
        return idSet;
    }

}
